import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";


const AboutUs = () => {
  return (
    <>

      <SectionTitle
        title="About Us"
        subtitle="Who We Are and What We Stand For"
      />


      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center space-y-20 md:space-y-0 ">

            <div className="relative md:w-1/2 flex justify-center">
              <div className="relative">
                <img
                  src="https://i.ibb.co/hC9tgXn/joel-muniz-BEr-JJL-Ksj-A-unsplash.jpg"
                  alt="Our Mission"
                  className="w-full h-auto max-w-[300px] rounded-lg shadow-lg"
                />
                <img
                  src="https://i.ibb.co/25rY64r/joel-muniz-qvzj-G2p-F4b-E-unsplash.jpg"
                  alt="Our Vision"
                  className="absolute lg:top-20 top-24 lg:left-32 left-16 w-3/4 h-auto max-w-[300px] rounded-lg shadow-md border-4 border-gray-100"
                />
              </div>
            </div>


            <div className="md:w-1/2 text-center md:text-left ">
              <h2 className="text-3xl font-bold text-emerald-700">
                A Mission Driven by Compassion
              </h2>
              <p className="mt-4 text-gray-700">
                We are a team of passionate individuals dedicated to making a
                difference. By providing essential aid and spreading kindness,
                we aim to uplift lives and create opportunities for all.
              </p>
              <p className="mt-4 mb-4 text-gray-700">
                Our journey started with a simple belief: *every small effort
                counts*. Together with our donors and volunteers, we strive to
                build a more inclusive and caring community.
              </p>
              <a
                href="#readmore"
                className=" py-4 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-800 text-white font-bold text-[16px] "
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 px-6 bg-emerald-50">
        <div className="container mx-auto">
          <div className="card w-full bg-white shadow-xl rounded-lg p-8">

            <header className="text-center mb-6">
              <h1 className="text-4xl font-bold text-emerald-700">
                Welcome to Winter Clothing Donation
              </h1>
              <p className="text-lg text-gray-600 mt-4">
                Empowering Change Through Collective Action
              </p>
            </header>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-700">Our Mission</h2>
                <p className="text-gray-600">
                  We aim to uplift lives through kindness and compassion, providing
                  essential aid to those in need.
                </p>
              </div>


              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-700">Our Vision</h2>
                <p className="text-gray-600">
                  To build a world where no one is left behind—where generosity and
                  care form the foundation of society.
                </p>
              </div>


              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-700">Our Progress</h2>


                <div>
                  <label className="block text-gray-700 mb-2">Donations</label>
                  <progress
                    className="progress progress-emerald w-full"
                    value="80"
                    max="100"
                  ></progress>
                  <p className="text-gray-500 text-sm mt-2">80% Achieved</p>
                </div>


                <div>
                  <label className="block text-gray-700 mb-2">Medical Help</label>
                  <progress
                    className="progress progress-emerald w-full"
                    value="90"
                    max="100"
                  ></progress>
                  <p className="text-gray-500 text-sm mt-2">90% Achieved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default AboutUs;
