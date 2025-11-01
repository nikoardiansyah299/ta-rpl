'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

/**
 * Component untuk set JWT tokens setelah Google Auth login
 * Ini memastikan refresh token system bisa bekerja untuk Google Auth users
 */
export default function SetAuthTokens() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.id_user) {
      // Cek apakah sudah ada access_token (untuk menghindari set ulang)
      const hasAccessToken = document.cookie.includes('access_token=');
      
      if (!hasAccessToken) {
        // Set JWT tokens untuk kompatibilitas dengan refresh token system
        fetch('/api/auth/set-tokens', {
          method: 'POST',
          credentials: 'include',
        }).catch(err => {
          console.error('Error setting tokens:', err);
        });
      }
    }
  }, [status, session]);

  return null; // Component ini tidak render apapun
}

