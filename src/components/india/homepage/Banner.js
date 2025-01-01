'use client';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative min-h-[600px] md:min-h-[calc(100vh-5rem)] mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/india/home/banner.png"
          alt="Professional Indian Visa Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/90 to-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 py-12 md:py-20 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-blue-800/50 border border-blue-700/30 rounded-lg mb-4 md:mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-xs md:text-sm text-blue-100">
              Trusted Visa Services Provider
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6 leading-tight">
            Professional Indian Visa <br className="hidden md:block" />
            Processing Services
          </h1>

          <p className="text-base md:text-lg text-blue-100 mb-6 md:mb-8 leading-relaxed max-w-2xl">
            Experience excellence in visa processing with our comprehensive
            services. We ensure a smooth and efficient application process for
            your Indian visa requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
            <Link
              href="/visa/step-one"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg"
            >
              Start Application
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <Link
              href="/track-application"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-blue-100 border border-blue-400/30 hover:bg-blue-800/30 transition-colors duration-300 rounded-lg"
            >
              Track Status
            </Link>
          </div>

          {/* Corporate Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-blue-700/30">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-800/50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xl font-semibold text-white">24/7</div>
                <div className="text-sm text-blue-200">Processing</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-800/50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xl font-semibold text-white">100%</div>
                <div className="text-sm text-blue-200">Secure</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-800/50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xl font-semibold text-white">Fast</div>
                <div className="text-sm text-blue-200">Turnaround</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
