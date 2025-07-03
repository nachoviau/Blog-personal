import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode; // Sidebar opcional para /papers
}

export default function Layout({ children, sidebar }: LayoutProps) {
  const { pathname } = useRouter();
  const isPapers = pathname.startsWith('/papers');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col w-full text-[0.8rem]">
      {/* Navbar */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50 h-20 flex items-center w-full">
        <div className={`w-full flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8 ${!isPapers ? 'max-w-4xl mx-auto' : ''}`}>
            {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
              Ignacio Viau
            </Link>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link 
                href="/papers" 
              className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                isPapers ? 'text-blue-400 bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
              Papers
              </Link>
              <Link 
                href="/projects" 
              className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                pathname === '/projects' ? 'text-blue-400 bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
              Proyectos
              </Link>
              <Link 
                href="/about" 
              className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                pathname === '/about' ? 'text-blue-400 bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
              Sobre mí
              </Link>
          </div>
        </div>
      </nav>
      {/* Layout para /papers */}
      {isPapers ? (
        <div className="flex flex-1 w-full">
          {/* Sidebar solo en sm+ */}
          {sidebar && (
            <aside className="hidden sm:block sticky top-20 h-[calc(100vh-5rem)] w-64 bg-gray-800 border-r border-gray-700">
              {sidebar}
            </aside>
          )}
          <main className="flex-1 min-w-0 p-4 sm:ml-64">
            {children}
          </main>
        </div>
      ) : (
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        {children}
      </main>
      )}
      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-auto w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-400 text-sm">
            © 2025 Ignacio Viau. Hecho con Next.js y Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
} 