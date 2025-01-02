import Footer from '@/components/india/common/Footer';
import Header from '@/components/india/common/Header';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from '@/context/formContext';

import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Home',
  description: 'Visa Application',
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} flex flex-col min-h-screen antialiased bg-background`}
      >
        <FormProvider>
          <ReactQueryProvider>
            <div className="min-h-screen flex flex-col">
              <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                  <div className="h-1 w-48 bg-primary mx-auto"></div>
                  <Header />
                </div>
              </div>
              <main className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-4 py-8 relative">
                  <div className="bg-white shadow-sm rounded-lg border border-gray-100">
                    {children}
                  </div>
                </div>
              </main>
              <Footer />
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={true}
              closeOnClick
              pauseOnHover
              theme="light"
              toastClassName="border-l-4 border-primary shadow-md"
            />
          </ReactQueryProvider>
        </FormProvider>
      </body>
    </html>
  );
}
