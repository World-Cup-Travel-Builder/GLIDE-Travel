import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    try {
        const authHeader = req.headers.get('authorization');

        if (!authHeader) {
            return NextResponse.redirect(new URL('/api/auth/login', req.url));
        }

        const accessToken = authHeader.split(' ')[1]; // Extract Bearer token

        // Fetch user roles from Auth0
        const userResponse = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (!userResponse.ok) {
            return NextResponse.redirect(new URL('/api/auth/login', req.url));
        }

        const userInfo = await userResponse.json();

        // Fetch roles from Auth0 Management API
        const rolesResponse = await fetch(
            `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${userInfo.sub}/roles`,
            {
                headers: { Authorization: `Bearer ${process.env.AUTH0_ACCESS_TOKEN}` },
            }
        );

        if (!rolesResponse.ok) {
            throw new Error('Failed to fetch roles');
        }

        const roles = await rolesResponse.json();
        const roleNames = roles.map((role: { name: string }) => role.name);

        if (!roleNames.includes('admin')) {
            return NextResponse.redirect(new URL('/unauthorized', req.url));
        }

        return NextResponse.next();
    } catch (error) {
        console.error('Auth0 Middleware Error:', error);
        return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
}

// Apply middleware only to protected routes
export const config = {
    matcher: ['/dashboard/:path*', '/admin/:path*'],
};
