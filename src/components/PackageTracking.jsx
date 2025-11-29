// components/PackageTracking.js
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { 
  FiPackage, 
  FiCheck, 
  FiTruck, 
  FiAnchor, 
  FiGlobe,
  FiShield,
  FiBox,
  FiClock,
  FiMapPin
} from 'react-icons/fi';

const PackageTracking = ({ transactionId }) => {
  const [trackingData, setTrackingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (transactionId) {
      fetchTrackingData();
    }
  }, [transactionId]);

  const fetchTrackingData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/tracking/${transactionId}`);
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Gagal memuat data tracking');
      }

      setTrackingData(data.tracking_history || []);
      
      // Animate after data load
      setTimeout(() => {
        animateTrackingItems();
      }, 300);
      
    } catch (err) {
      console.error('Error fetching tracking:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const animateTrackingItems = () => {
    gsap.fromTo('.tracking-item',
      { 
        opacity: 0, 
        x: -30,
        scale: 0.9
      },
      { 
        opacity: 1, 
        x: 0,
        scale: 1,
        duration: 0.6, 
        stagger: 0.15,
        ease: "back.out(1.7)" 
      }
    );
  };

  const getStatusIcon = (status) => {
    const iconMap = {
      ordered_on: FiPackage,
      payment_confirmed: FiCheck,
      in_processing: FiPackage,
      quality_control: FiShield,
      packaging: FiBox,
      sent_to_harbour: FiTruck,
      departed_from_harbour: FiAnchor,
      arrived_at_destination: FiAnchor,
      processing_bea_cukai: FiShield,
      on_the_way: FiGlobe,
      to_the_destination_address: FiMapPin,
      delivered: FiCheck
    };
    return iconMap[status] || FiClock;
  };

  const getStatusColor = (status, index) => {
    // Active status (last item)
    if (index === trackingData.length - 1) {
      return 'bg-blue-100 border-blue-300 text-blue-700';
    }
    
    // Completed status
    return 'bg-green-100 border-green-300 text-green-700';
  };

  const getStatusText = (status) => {
    const textMap = {
      ordered_on: 'Order created',
      payment_confirmed: 'Payment confirmed',
      in_processing: 'In processing',
      quality_control: 'Quality Control',
      packaging: 'Packaging',
      sent_to_harbour: 'Sent to Harbour',
      departed_from_harbour: 'Departed from Harbour',
      arrived_at_destination: 'Arrived at Destination',
      processing_bea_cukai: 'Processing Customs',
      on_the_way: 'On the way',
      to_the_destination_address: 'To the Destination Address',
      delivered: 'delivered'
    };
    return textMap[status] || status.replace(/_/g, ' ');
  };

  const formatTrackingDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <FiTruck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Tracking Order</h2>
            <p className="text-gray-600">Loading tracking data...</p>
          </div>
        </div>
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin h-8 w-8 rounded-full border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center">
            <FiClock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Tracking Order</h2>
            <p className="text-gray-600">Failed to load tracking data</p>
          </div>
        </div>
        <div className="text-center py-6">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchTrackingData}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (trackingData.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
            <FiPackage className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Tracking Order</h2>
            <p className="text-gray-600">Tracking data is not available</p>
          </div>
        </div>
        <div className="text-center py-8">
          <FiPackage className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Tracking data has not been created for this order</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <FiTruck className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Tracking Order</h2>
          <p className="text-gray-600">Your order has arrived at the destination</p>
        </div>
      </div>

      <div className="space-y-6 relative">
        {/* Timeline vertical line */}
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-200"></div>
        
        {trackingData.map((track, index) => {
          const IconComponent = getStatusIcon(track.status_tracking);
          const isLastItem = index === trackingData.length - 1;
          
          return (
            <div key={track.id_tracking} className="tracking-item flex items-start gap-4 relative">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
                isLastItem 
                  ? 'bg-blue-100 border-blue-300 text-blue-600 animate-pulse' 
                  : 'bg-green-100 border-green-300 text-green-600'
              }`}>
                <IconComponent className="w-5 h-5" />
              </div>
              
              <div className="flex-1 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {getStatusText(track.status_tracking)}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {formatTrackingDate(track.tanggal_tracking)}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{track.deskripsi}</p>
                
                {isLastItem && (
                  <div className="mt-2 inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    Newest Status
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackageTracking;