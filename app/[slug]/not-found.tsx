'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/404-mountains.jpg)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/50 to-blue-900/60"></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="text-2xl font-bold text-white flex items-center gap-2">
          <MapPin className="w-6 h-6" />
          Trek & Travel
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300"
        >
          <Home className="w-4 h-4" />
          Back Home
        </Link>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* 404 Number */}
        <div className="mb-6">
          <h1 className="text-9xl font-bold text-white/20 tracking-wider mb-4">404</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>

        {/* Main Message */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
          Lost on the Trail?
        </h2>

        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg text-pretty leading-relaxed">
          It seems you've wandered off the beaten path. The page you're looking for has disappeared into the mist. Let's guide you back to safety.
        </p>

        {/* Journey Status Badge */}
        <div className="mb-12 inline-block">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <p className="text-white/80 text-sm font-medium">🧭 Navigation Error - Path Not Found</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Return to Home
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/tours"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
          >
            Explore Tours
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm mb-4">Need assistance?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="text-blue-200 hover:text-white underline decoration-dashed hover:decoration-solid transition-all"
            >
              Contact our guides
            </Link>
            <span className="hidden sm:inline text-white/30">•</span>
            <Link
              href="/"
              className="text-blue-200 hover:text-white underline decoration-dashed hover:decoration-solid transition-all"
            >
              View all treks
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm py-6 px-4 text-center">
        <p className="text-white/60 text-sm">
          "Every wrong turn is an opportunity to discover something new." — Adventure Awaits
        </p>
      </div>
    </div>
  );
}
