'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        router.push('/dashboard'); // Redirect logged-in users to the dashboard
      } else {
        router.push('/api/auth/login'); // Redirect unauthenticated users to login
      }
    }
  }, [user, isLoading, router]);

  return <p>Loading...</p>; // Show a loading message while checking auth status
}
