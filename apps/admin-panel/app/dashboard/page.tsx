'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Dashboard() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            {user ? (
                <div className="mt-4 p-4 border rounded shadow">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Auth0 ID:</strong> {user.sub}</p>
                </div>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
}
