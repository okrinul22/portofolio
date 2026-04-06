import { Link } from '@inertiajs/react';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold gradient-text">
            Portfolio
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900 transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="px-6 md:px-16 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-500">
          <p>© 2024 Okrinul Hamdi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
