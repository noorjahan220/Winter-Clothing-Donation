const Newsletter = () => {
    return (
      <div className="bg-gradient-to-br  w-11/12 mx-auto my-5 from-emerald-400 to-teal-500 shadow-lg rounded-xl p-6 text-white py-10 px-5">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
          <p>Stay updated with the latest campaigns, events, and news.</p>
          <div className="flex justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-md"
            />
            <button className="btn bg-emerald-700 hover:bg-emerald-800 text-white">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-emerald-300">We respect your privacy and will not share your information.</p>
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  