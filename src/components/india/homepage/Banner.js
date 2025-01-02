'use client';
import { useRef } from 'react';

const Banner = () => {
  const ref = useRef(null);

  return (
    <div className="relative">
      <div
        className="relative mt-20 bg-no-repeat bg-cover transition-all duration-500 ease-in-out overflow-hidden
          min-h-[600px] md:min-h-[calc(100vh-5rem)] flex items-center justify-center"
        style={{
          backgroundImage: 'url("/assets/images/india/home/banner.png")',
          backgroundPosition: 'center',
        }}
      >
        {/* Unique Dot Matrix Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='white' fill-opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }}
        ></div>

        {/* Unique Animated Borders */}
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent animate-pulse"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse delay-300"></div>
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-orange/40 to-transparent animate-pulse delay-600"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-pulse delay-900"></div>
        </div>

        {/* Content with Modern Layout */}
        <div className="relative w-full text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center mx-auto max-w-4xl text-center">
              <div className="relative mb-6 md:mb-8">
                <span className="block text-sm md:text-base font-medium text-orange/90 mb-3 tracking-wider uppercase">
                  Premium Visa Services
                </span>
                <h1 className="relative text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  Seamless{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-orange via-white to-primary bg-clip-text text-transparent">
                      Visa Journey
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange via-primary to-orange opacity-50 blur-sm"></span>
                  </span>
                </h1>

                {/* Unique Dot Matrix Frame */}
                <div className="absolute -inset-4 md:-inset-6">
                  <div className="absolute inset-0 border border-white/10"></div>
                  <div className="absolute inset-0 border border-white/10 transform scale-105"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-white/20 rounded-full"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-white/20 rounded-full"></div>
                </div>
              </div>

              <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-200 max-w-3xl backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                Experience premium visa services with our dedicated team. We
                ensure a smooth and efficient process for your Indian visa
                application.
              </p>

              {/* Unique Animated Elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-orange/20 to-transparent rounded-full blur-3xl animate-matrix"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl animate-matrix-reverse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Announcement Bar */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-primary/95 via-primary/90 to-primary/95 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto py-3 md:py-4">
          <div className="flex items-center justify-between text-white">
            <div className="w-full overflow-hidden">
              <marquee
                className="text-xs sm:text-sm md:text-base font-medium tracking-wide"
                behavior="scroll"
                direction="left"
                scrollamount="5"
              >
                <span className="inline-flex items-center">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 mr-2 md:mr-4 bg-gradient-to-r from-orange to-primary rounded-full animate-pulse"></span>
                  Avail Indian Visa plus services through &quot;Official app
                  Indian Visa Su-Swagatam&quot; mobile App for 60 countries
                  <span className="mx-4 md:mx-8 text-orange">•</span>
                  One stop solution for all Visa related services
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 ml-2 md:ml-4 bg-gradient-to-r from-primary to-orange rounded-full animate-pulse"></span>
                </span>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
