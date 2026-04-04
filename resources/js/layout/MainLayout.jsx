import { Link } from '@inertiajs/react';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="font-bold">Portfolio</h1>

        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/projects" className="hover:text-blue-500">Projects</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </nav>

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}