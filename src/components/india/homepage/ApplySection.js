import Image from 'next/image';
import Link from 'next/link';

const ApplySection = () => {
  const visaServices = [
    {
      title: 'Corporate Tourist Visa',
      description:
        'Premium visa service for leisure travel. Our corporate expertise ensures a professional approach to your tourism visa requirements.',
      benefits: ['Premium Processing', 'Travel Insurance Support'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Executive Business Visa',
      description:
        'Specialized service for corporate travelers. Tailored solutions for business professionals with time-sensitive requirements.',
      benefits: ['Priority Processing', 'Business Documentation'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Professional Medical Visa',
      description:
        'Comprehensive medical travel solutions. Expert handling of medical documentation and coordination with healthcare providers.',
      benefits: ['Medical Coordination', 'Express Processing'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: 'Conference & Events Visa',
      description:
        'Strategic visa solutions for event attendees. Professional handling of conference and seminar-related visa requirements.',
      benefits: ['Event Documentation', 'Group Processing'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  const professionalProcess = [
    {
      title: 'Strategic Consultation',
      description:
        'Professional assessment of your visa requirements with our expert consultants to determine the optimal application strategy.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: 'Documentation Review',
      description:
        'Thorough analysis and verification of all required documents by our professional team to ensure compliance with visa regulations.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Application Processing',
      description:
        'Expert handling of your visa application with attention to detail and adherence to all procedural requirements.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: 'Quality Assurance',
      description:
        'Final review and verification of visa documentation to ensure accuracy and completeness before submission.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-slate-50 to-white">
      {/* Professional Services Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-1 mb-8 bg-blue-50 rounded-full">
            <span className="px-4 py-1 text-sm font-medium text-blue-800">
              Professional Visa Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Strategic <span className="text-blue-600">Visa Solutions</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Comprehensive visa services tailored for professionals. Our expert
            team delivers efficient and reliable visa processing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visaServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-indigo-500/[0.02] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-blue-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>
                <Link
                  href="/visa/step-one"
                  className="mt-6 inline-flex items-center text-blue-600 text-sm hover:text-blue-700 transition-colors duration-300"
                >
                  Proceed with Application
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Process Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Professional <span className="text-blue-600">Process</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures precision and efficiency in every
            visa application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionalProcess.map((step, index) => (
            <div key={index} className="relative group">
              <div className="relative p-8 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                  {step.icon}
                </div>
                <div className="absolute top-8 right-8 text-gray-200 font-bold text-xl">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < professionalProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-blue-100 to-transparent transform -translate-y-1/2 -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/visa/step-one"
            className="group inline-flex items-center justify-center"
          >
            <span className="relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 transform hover:-translate-y-1">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center text-lg">
                Begin Professional Application
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
