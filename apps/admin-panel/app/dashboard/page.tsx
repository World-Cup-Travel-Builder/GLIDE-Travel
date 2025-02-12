'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const { user, error, isLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/api/auth/login');
        }
    }, [user, isLoading]);

    if (isLoading)
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
        );

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {user ? (
                <div className="mt-4 p-4 border rounded shadow">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Auth0 ID:</strong> {user.sub}</p>
                </div>
            ) : (
                <p>Redirecting to login...</p>
            )}
        </div>
    );
}
