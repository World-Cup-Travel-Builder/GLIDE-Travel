import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    try {
        const sessionCookie = req.cookies.get('appSession');

        if (!sessionCookie) {
            return NextResponse.redirect(new URL('/api/auth/login', req.url));
        }

        // Verify the session by sending a request to `/api/auth/me`
        const sessionResponse = await fetch(new URL('/api/auth/me', req.url), {
            headers: { Cookie: `appSession=${sessionCookie.value}` },
        });

        if (!sessionResponse.ok) {
            return NextResponse.redirect(new URL('/api/auth/login', req.url));
        }

        const sessionData = await sessionResponse.json();

        if (!sessionData || !sessionData.sub) {
            return NextResponse.redirect(new URL('/api/auth/login', req.url));
        }

        // Fetch user roles with error logging
        const rolesResponse = await fetch(
            `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${sessionData.sub}/roles`,
            {
                headers: { Authorization: `Bearer ${process.env.AUTH0_ACCESS_TOKEN}` },
            }
        );

        if (!rolesResponse.ok) {
            const errorText = await rolesResponse.text();
            console.error('Auth0 Role Fetch Error:', errorText);
            throw new Error(`Failed to fetch roles: ${rolesResponse.status} - ${errorText}`);
        }

        const roles = await rolesResponse.json();
        const roleNames = roles.map((role: { name: string }) => role.name);

        if (!roleNames.includes('Admin')) {
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
