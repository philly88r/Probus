"use client";

import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { AnimatedBeamDemo } from "@/components/ui/animated-beam-demo";
import { useState } from 'react';

export default function Home() {
  const [showFeaturesPopup, setShowFeaturesPopup] = useState(false);
  const [showHowItWorksPopup, setShowHowItWorksPopup] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroGeometric 
        badge="Probation Monitoring System" 
        title1="PROBUS/" 
        title2="JURIS" 
      />

      {/* Features Section */}
      <section id="features" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Comprehensive Probation Monitoring
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A modern alternative to traditional monitoring methods, designed to reduce recidivism and costs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-md flex items-center justify-center">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">JURIS LIVE</h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Video telephony with multi-party conferencing, recording capabilities, and screen sharing for remote court appearances.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-md flex items-center justify-center">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">JURIS REGISTER</h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Digital check-in system with push notifications, time-stamped verification, and geolocation tracking.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-md flex items-center justify-center">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">JURIS REVEAL</h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Remote testing integration with breathalyzer compatibility, identity verification, and secure result tracking.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              id="explore-features-btn" 
              className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-600"
              onClick={() => setShowFeaturesPopup(true)}
            >
              Explore All Features
              <svg className="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              How PROBUS/JURIS Works
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our integrated system connects all stakeholders in the probation process for seamless monitoring and support.
            </p>
          </div>

          <div className="relative">
            <AnimatedBeamDemo />
          </div>

          <div className="mt-12 text-center">
            <button 
              id="how-it-works-btn" 
              className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-600"
              onClick={() => setShowHowItWorksPopup(true)}
            >
              Learn More
              <svg className="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Implementation Timeline
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A single comprehensive solution with flexible implementation options to meet your jurisdiction&apos;s needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Phase 1 */}
            <div className="flex flex-col rounded-3xl bg-white dark:bg-gray-800 shadow-xl ring-1 ring-gray-200 dark:ring-gray-700">
              <div className="p-8 sm:p-10">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 dark:text-indigo-400">Phase 1</h3>
                <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  8 Weeks
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
                  Rapid implementation of core monitoring features to get your jurisdiction started quickly.
                </p>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="flex flex-1 flex-col justify-between">
                  <ul role="list" className="space-y-5">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Core system setup and configuration</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Video telephony and registration verification</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Basic location monitoring</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Initial training for staff</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex flex-col rounded-3xl bg-white dark:bg-gray-800 shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 ring-2 ring-indigo-600 dark:ring-indigo-500">
              <div className="p-8 sm:p-10">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 dark:text-indigo-400">Phase 2</h3>
                <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  16 Weeks
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
                  Complete implementation with all features and full integration with your existing systems.
                </p>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="flex flex-1 flex-col justify-between">
                  <ul role="list" className="space-y-5">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">All Phase 1 features</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Testing compliance and calendaring</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Education modules and risk assessment</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Advanced reporting and analytics</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Comprehensive staff training</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex flex-col rounded-3xl bg-white dark:bg-gray-800 shadow-xl ring-1 ring-gray-200 dark:ring-gray-700">
              <div className="p-8 sm:p-10">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 dark:text-indigo-400">Phase 3</h3>
                <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  24 Weeks
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
                  Enterprise-level implementation with advanced features and full system integration.
                </p>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="flex flex-1 flex-col justify-between">
                  <ul role="list" className="space-y-5">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">All Phase 1 & 2 features</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Document management system</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Custom integrations with court systems</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Advanced analytics and predictive modeling</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-400">Enterprise-level support and training</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center rounded-full bg-indigo-50 px-6 py-3 text-xl font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-900/30 dark:text-indigo-300 dark:ring-indigo-700/30">
              <span className="font-bold">$30,000</span><span className="ml-2">Total Development Cost</span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Payment terms are flexible and can be discussed to meet your specific needs
            </p>
            
            <div className="mt-10 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">AWS Cloud Infrastructure Included</h3>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h5 className="font-medium text-gray-900 dark:text-white">Application Hosting</h5>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2">AWS Elastic Beanstalk</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2">Amazon EC2 Auto Scaling</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2">Amazon CloudFront CDN</span>
                        </li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h5 className="font-medium text-gray-900 dark:text-white">Database & Storage</h5>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2">Amazon RDS for PostgreSQL</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2">Amazon S3 for document storage</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2">Amazon ElastiCache</span>
                        </li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h5 className="font-medium text-gray-900 dark:text-white">Security & Compliance</h5>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2">AWS Shield for DDoS protection</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2">AWS WAF for web application firewall</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2">AWS KMS for encryption</span>
                        </li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h5 className="font-medium text-gray-900 dark:text-white">DevOps & Monitoring</h5>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2">AWS CloudWatch for monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2">AWS CodePipeline for CI/CD</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2">AWS CloudFormation for IaC</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Ongoing maintenance and support available at competitive rates after initial deployment
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PROBUS/JURIS</h3>
              <p className="text-gray-400">
                Transforming probation monitoring through innovative technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: info@probus-juris.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PROBUS/JURIS. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Features Popup */}
      {showFeaturesPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">PROBUS/JURIS Features</h2>
                <button 
                  onClick={() => setShowFeaturesPopup(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="space-y-8">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Core Monitoring Features</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><span className="font-semibold">Real-time GPS Tracking:</span> Continuous location monitoring with geofencing capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><span className="font-semibold">Biometric Verification:</span> Facial recognition and fingerprint authentication</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><span className="font-semibold">Substance Testing:</span> Mobile breathalyzer and drug testing with tamper-proof verification</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Communication Tools</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><span className="font-semibold">Secure Messaging:</span> End-to-end encrypted communication between probationers and officers</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><span className="font-semibold">Video Conferencing:</span> Multi-party HD video calls with recording capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><span className="font-semibold">Automated Notifications:</span> Customizable alerts for appointments, court dates, and requirements</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Administrative Tools</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><span className="font-semibold">Case Management:</span> Comprehensive digital case files with document storage</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><span className="font-semibold">Analytics Dashboard:</span> Real-time compliance metrics and trend analysis</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><span className="font-semibold">Reporting Tools:</span> Customizable reports for courts, agencies, and stakeholders</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Educational Resources</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><span className="font-semibold">Treatment Modules:</span> Interactive courses for substance abuse, anger management, etc.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><span className="font-semibold">Resource Directory:</span> Local support services and community resources</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><span className="font-semibold">Progress Tracking:</span> Measurable goals and achievement recognition</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={() => setShowFeaturesPopup(false)}
                  className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* How It Works Popup */}
      {showHowItWorksPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How PROBUS/JURIS Works</h2>
                <button 
                  onClick={() => setShowHowItWorksPopup(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="space-y-8">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">System Architecture</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    PROBUS/JURIS is built on a secure cloud-based platform that connects all stakeholders in the probation process:
                  </p>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      <span><span className="font-semibold">Secure AWS Cloud Infrastructure:</span> All data is encrypted and stored in compliance with legal requirements</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      <span><span className="font-semibold">Role-Based Access Control:</span> Different stakeholders have appropriate access levels</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      <span><span className="font-semibold">Real-Time Data Processing:</span> Immediate updates across the system for all users</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">User Workflow</h3>
                  <ol className="space-y-6 text-lg">
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">1</div>
                      <div className="ml-4">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Enrollment</h4>
                        <p className="mt-1 text-gray-700 dark:text-gray-300">Probationers are registered in the system with biometric data, contact information, and probation requirements.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">2</div>
                      <div className="ml-4">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Monitoring</h4>
                        <p className="mt-1 text-gray-700 dark:text-gray-300">The system tracks compliance through location data, check-ins, and substance testing as required.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">3</div>
                      <div className="ml-4">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Communication</h4>
                        <p className="mt-1 text-gray-700 dark:text-gray-300">Secure messaging and video conferencing facilitate communication between all stakeholders.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">4</div>
                      <div className="ml-4">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Reporting</h4>
                        <p className="mt-1 text-gray-700 dark:text-gray-300">The system generates compliance reports and analytics for officers, courts, and administrators.</p>
                      </div>
                    </li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Integration Capabilities</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      <span><span className="font-semibold">Court Management Systems:</span> Seamless data exchange with existing court databases</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      <span><span className="font-semibold">Testing Facilities:</span> Direct integration with approved testing providers</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      <span><span className="font-semibold">Payment Processing:</span> Secure handling of fines, fees, and restitution payments</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={() => setShowHowItWorksPopup(false)}
                  className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
