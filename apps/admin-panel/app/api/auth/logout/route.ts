import { handleLogout } from '@auth0/nextjs-auth0';

export const GET = handleLogout({
    returnTo: process.env.NEXT_PUBLIC_AUTH0_BASE_URL || 'http://localhost:3000',
});
