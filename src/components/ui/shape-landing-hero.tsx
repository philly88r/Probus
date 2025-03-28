import React from 'react';

interface HeroGeometricProps {
  badge: string;
  title1: string;
  title2: string;
}

export function HeroGeometric({ badge, title1, title2 }: HeroGeometricProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 sm:py-32">
      {/* Geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-indigo-500/10 mix-blend-multiply blur-3xl filter dark:bg-indigo-700/20"></div>
        <div className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-purple-500/10 mix-blend-multiply blur-3xl filter dark:bg-purple-700/20"></div>
        <div className="absolute left-1/4 bottom-1/4 h-80 w-80 rounded-full bg-blue-500/10 mix-blend-multiply blur-3xl filter dark:bg-blue-700/20"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-900/30 dark:text-indigo-300 dark:ring-indigo-700/30">
            {badge}
          </div>
          
          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            {title1} <span className="text-indigo-600 dark:text-indigo-400">{title2}</span>
          </h1>
          
          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A comprehensive probation monitoring system designed to reduce recidivism, improve compliance, and streamline case management.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#features"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-600"
            >
              Explore Features
            </a>
            <a href="#how-it-works" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
              How It Works <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
