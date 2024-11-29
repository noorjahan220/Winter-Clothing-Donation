import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="py-16 px-6 bg-emerald-50">
      <div className="container mx-auto">

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-700">How It Works</h1>
          <p className="text-lg text-gray-600 mt-4">
            A Simple Process to Empower Change
          </p>
        </header>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="card h-[90%] bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg rounded-xl p-6 hover:shadow-emerald-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Step 1: Donate</h2>
            <p className="text-white  text-[16px] pb-4">
              Contribute winter clothing and essentials. You can drop off donations at our designated locations or contact us for collection.
            </p>
          </div>


          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="card h-[90%] bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg rounded-xl p-6 hover:shadow-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Step 2: Sort & Organize</h2>
            <p className="text-white  text-[16px] pb-4">
              Volunteers will sort and organize the donations based on size, type, and condition to ensure the right items are sent to the right people.
            </p>
          </div>


          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="card h-[90%] bg-gradient-to-br from-pink-400 to-red-500 shadow-lg rounded-xl p-6 hover:shadow-pink-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Step 3: Deliver</h2>
            <p className="text-white text-[16px] pb-4">
              We will distribute the clothing and essentials to those in need, ensuring they reach the right communities and individuals during the cold season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
