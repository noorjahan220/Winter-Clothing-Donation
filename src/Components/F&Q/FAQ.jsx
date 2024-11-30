import React from 'react';


const FAQ = () => {
  return (
    <div className="p-16 mt-8 bg-base-200 rounded-lg mb-10 shadow-lg">


      <div className="flex flex-col md:flex-row items-start  text-center md:space-x-10 space-y-6 md:space-y-0">


        <div className=" mb-6 h-[80px] md:h-[100px]">
          <h1 className="text-2xl font-bold text-emerald-700">Frequently Asked Questions</h1>
          <img src="https://i.ibb.co.com/jHwrFY7/Humaaans-2-Characters.png" alt="" />
        </div>


        <div className="md:w-2/3 space-y-2">

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg shadow-md">
            <div className="collapse-title text-[18px] font-medium text-emerald-700">
              How can I make a donation to your charity?
            </div>
            <div className="collapse-content text-gray-700 text-[16px]">
              <p>
                You can make a donation to our charity by clicking the "Donate Now" button on our website.
                We offer various donation options, including one-time donations, monthly contributions,
                and even opportunities to sponsor specific programs or individuals.
              </p>
            </div>
          </div>


          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg shadow-md">
            <div className="collapse-title  font-medium text-emerald-700 text-[18px]">
              Is my donation tax-deductible?
            </div>
            <div className="collapse-content text-gray-700 text-[16px]">
              <p>
                Yes, all donations made to our charity are tax-deductible, and we will provide you with
                a receipt for your records. Please consult with your tax advisor for specific details.
              </p>
            </div>
          </div>


          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg shadow-md">
            <div className="collapse-title  font-medium text-emerald-700 text-[18px]">
              Where does my donation go?
            </div>
            <div className="collapse-content text-gray-700 text-[16px]">
              <p>
                Your donation goes directly to supporting our programs that provide aid to those in need.
                We ensure that all donations are used efficiently to make a real impact on the lives of others.
              </p>
            </div>
          </div>


          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg shadow-md">
            <div className="collapse-title font-medium text-emerald-700 text-[18px]">
              Can I volunteer with your charity?
            </div>
            <div className="collapse-content text-gray-700 text-[16px]">
              <p>
                Absolutely! We welcome volunteers to help with various activities such as sorting donations,
                organizing events, and spreading awareness. Reach out to us for volunteer opportunities.
              </p>
            </div>
          </div>


          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg shadow-md">
            <div className="collapse-title  font-medium text-emerald-700 text-[18px]">
              How can I stay updated on your charity's work?
            </div>
            <div className="collapse-content text-gray-700 text-[16px]">
              <p>
                You can stay updated by subscribing to our newsletter, following us on social media,
                or regularly visiting our website for news and updates on our programs and initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
