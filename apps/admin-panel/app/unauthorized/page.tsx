export default function UnauthorizedPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-red-500">Access Denied</h1>
            <p className="mt-4 text-gray-600">You do not have permission to access this page.</p>
            <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
                Go Home
            </a>
        </div>
    );
}
