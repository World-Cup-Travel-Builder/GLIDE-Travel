'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react'; // Icons for sidebar toggle

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white flex flex-col justify-between transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform lg:relative lg:translate-x-0`}
            >
                {/* Sidebar Header */}
                <div>
                    <div className="p-4 flex justify-between items-center border-b border-gray-700">
                        <h2 className="text-xl font-semibold">Dashboard</h2>
                        <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    {/* Sidebar Navigation */}
                    <nav className="mt-4 flex-1">
                        <ul>
                            <li>
                                <Link
                                    href="/dashboard"
                                    className={`block px-4 py-2 hover:bg-gray-700 ${pathname === '/dashboard' ? 'bg-gray-800' : ''
                                        }`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dashboard/settings"
                                    className={`block px-4 py-2 hover:bg-gray-700 ${pathname === '/dashboard/settings' ? 'bg-gray-800' : ''
                                        }`}
                                >
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Logout Button at the Bottom */}
                <div className="p-4 border-t border-gray-700">
                    <a href="/api/auth/logout" className="block px-4 py-2 hover:bg-red-600">
                        Logout
                    </a>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
