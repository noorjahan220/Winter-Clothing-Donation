import React from "react";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-gray-300 max-w-full">
      <div className="container mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p>Email: <a href="mailto:support@example.com" className="text-emerald-200 underline">support@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-emerald-200 underline">+123 456 7890</a></p>
          <p>Address: 123 Charity Lane, Compassion City, USA</p>
        </div>


        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-emerald-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9 8.44 9.8v-6.93H7.9v-2.87h2.54V9.78c0-2.5 1.52-3.88 3.76-3.88 1.07 0 2 .08 2.27.11v2.63h-1.56c-1.22 0-1.45.58-1.45 1.43v1.87h2.9l-.38 2.87h-2.52V21.8C18.34 21 22 16.99 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-emerald-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.59.59-2.46.7a4.29 4.29 0 001.88-2.37 8.46 8.46 0 01-2.7 1.03 4.25 4.25 0 00-7.37 3.87 12.03 12.03 0 01-8.74-4.44 4.2 4.2 0 00-.57 2.13 4.25 4.25 0 001.88 3.54A4.25 4.25 0 012 9.75v.05a4.25 4.25 0 003.41 4.17 4.27 4.27 0 01-1.11.15c-.27 0-.54-.02-.8-.07a4.25 4.25 0 003.97 2.95A8.52 8.52 0 012 18.05a12.06 12.06 0 006.51 1.91c7.81 0 12.08-6.47 12.08-12.08 0-.18-.01-.36-.02-.54A8.57 8.57 0 0022.46 6z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-emerald-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 9h3V7H9a3 3 0 00-3 3v3H4v2h2v5h2v-5h2l1-2H8v-1a1 1 0 011-1z" />
              </svg>
            </a>
          </div>
        </div>


        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Winter Clothing Donation</h2>
          <p>© 2024 Winter Clothing Donation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
