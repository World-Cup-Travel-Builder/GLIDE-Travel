'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function AuthButton() {
    const { user, isLoading } = useUser();

    if (isLoading) return <p>Loading...</p>;

    return user ? (
        <a href="/api/auth/logout" className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
        </a>
    ) : (
        <a href="/api/auth/login" className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
        </a>
    );
}
