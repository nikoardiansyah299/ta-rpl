'use client';
import { useState, useEffect } from 'react';
import { FiStar, FiUser } from 'react-icons/fi';
import { useSession } from 'next-auth/react';

const StarRating = ({ rating, onRatingChange, interactive = false }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    if (interactive && onRatingChange) {
      onRatingChange(value);
    }
  };

  const handleMouseEnter = (value) => {
    if (interactive) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(0);
    }
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hoverRating || rating);
        return (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            disabled={!interactive}
            className={`${
              interactive
                ? 'cursor-pointer hover:scale-110 transition-transform'
                : 'cursor-default'
            }`}
          >
            <FiStar
              className={`w-6 h-6 ${
                isFilled
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              } transition-colors`}
            />
          </button>
        );
      })}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <FiUser className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{review.users.username}</p>
            <p className="text-xs text-gray-500">{formatDate(review.tanggal_review)}</p>
          </div>
        </div>
        <StarRating rating={review.rating} interactive={false} />
      </div>
      {review.komentar && (
        <p className="text-gray-700 mt-2 leading-relaxed">{review.komentar}</p>
      )}
    </div>
  );
};

export default function ReviewProduct({ productId }) {
  const { data: session } = useSession();
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const [userReview, setUserReview] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = async () => {
    try {
      const res = await fetch("/api/me", {
        credentials: "include",
      });
      const data = await res.json();
      const loggedIn = !!(session?.user?.id_user || data?.user?.id_user);
      setIsLoggedIn(loggedIn);
      return loggedIn;
    } catch (error) {
      setIsLoggedIn(false);
      return false;
    }
  };

  useEffect(() => {
    const init = async () => {
      await fetchReviews();
      const loggedIn = await checkLoginStatus();
      if (loggedIn) {
        await checkUserReview();
      }
    };
    init();
  }, [productId, session]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/product/${productId}/review`);
      const data = await res.json();

      if (res.ok) {
        setReviews(data.reviews || []);
        setAverageRating(data.averageRating || 0);
        setRatingCount(data.ratingCount || 0);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkUserReview = async () => {
    // Check if user has already reviewed this product
    try {
      const meRes = await fetch("/api/me", {
        credentials: "include",
      });
      const meData = await meRes.json();

      if (meData?.user?.id_user) {
        const reviewRes = await fetch(`/api/product/${productId}/review`);
        const reviewData = await reviewRes.json();

        if (reviewData.reviews) {
          const existingReview = reviewData.reviews.find(
            (r) => r.users.id_user === meData.user.id_user
          );
          if (existingReview) {
            setUserReview(existingReview);
            setUserRating(existingReview.rating);
            setUserComment(existingReview.komentar || '');
          }
        }
      }
    } catch (error) {
      console.error('Error checking user review:', error);
    }
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    // Check if user is logged in
    const res = await fetch("/api/me", {
      credentials: "include",
    });
    const data = await res.json();

    if (!session?.user?.id_user && !data?.user?.id_user) {
      showNotification("Silakan login terlebih dahulu untuk memberikan review", "error");
      return;
    }

    if (userRating === 0) {
      showNotification("Pilih rating terlebih dahulu", "error");
      return;
    }

    setSubmitting(true);
    try {
      const reviewData = {
        rating: userRating,
      };

      // Hanya kirim komentar jika tidak kosong
      if (userComment && userComment.trim().length > 0) {
        reviewData.komentar = userComment.trim();
      }

      const response = await fetch(`/api/product/${productId}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reviewData),
      });

      const result = await response.json();

      if (response.ok) {
        showNotification(
          userReview
            ? "Review berhasil diperbarui"
            : "Review berhasil ditambahkan",
          "success"
        );
        setUserReview(result.review);
        setShowForm(false);
        await fetchReviews();
      } else {
        console.error('Review submission error:', { status: response.status, error: result });
        showNotification(result.error || "Gagal menyimpan review", "error");
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      showNotification(
        error.message || "Terjadi kesalahan saat menyimpan review",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditReview = () => {
    setShowForm(true);
  };

  return (
    <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
      {/* Header dengan Rating Summary */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Review Produk</h2>
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            <p className="text-gray-600">Memuat review...</p>
          </div>
        ) : (
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
              <StarRating rating={Math.round(averageRating)} interactive={false} />
            </div>
            <div className="text-gray-600">
              <p className="font-medium">{ratingCount} Review</p>
              <p className="text-sm">according {ratingCount} review</p>
            </div>
          </div>
        )}
      </div>

      {/* Form Review */}
      {isLoggedIn && (
        <div className="mb-6">
          {userReview ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-blue-900">Your Review</p>
                  <StarRating rating={userReview.rating} interactive={false} />
                  {userReview.komentar && (
                    <p className="text-blue-700 mt-2">{userReview.komentar}</p>
                  )}
                </div>
                <button
                  onClick={handleEditReview}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Edit Review
                </button>
              </div>
            </div>
          ) : (
            !showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Write Review
              </button>
            )
          )}

          {showForm && (
            <form onSubmit={handleSubmitReview} className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating <span className="text-red-500">*</span>
                </label>
                <StarRating
                  rating={userRating}
                  onRatingChange={setUserRating}
                  interactive={true}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                  Comments (optional)
                </label>
                <textarea
                  id="comment"
                  value={userComment}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) {
                      setUserComment(e.target.value);
                    }
                  }}
                  rows={4}
                  maxLength={500}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  placeholder="Bagikan pengalaman Anda tentang produk ini..."
                />
                <p className={`text-xs mt-1 ${userComment.length >= 500 ? 'text-red-500' : 'text-gray-500'}`}>
                  {userComment.length}/500 characters
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={submitting || userRating === 0}
                  className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Saving...' : userReview ? 'Update Review' : 'Send Review'}
                </button>
                {showForm && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      if (!userReview) {
                        setUserRating(0);
                        setUserComment('');
                      }
                    }}
                    className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      )}

      {!isLoggedIn && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800 text-sm">
            <strong>Login</strong> for submitting a review
          </p>
        </div>
      )}

      {/* Notification */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
            notification.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}
        >
          {notification.message}
        </div>
      )}

      {/* Daftar Reviews */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          All Reviews ({ratingCount})
        </h3>
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-500">There is no review yet for this product</p>
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id_review} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

