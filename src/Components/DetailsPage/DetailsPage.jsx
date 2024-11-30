import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaEnvelope, FaBoxOpen, FaLocationArrow, FaUserCircle } from 'react-icons/fa'; // Importing icons

const CampaignDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const campaign = data.find((item) => item.id === parseInt(id));

    if (!campaign) {
        return <p className="text-center text-xl font-semibold text-red-600">Campaign not found!</p>;
    }

    const handleCamp = e => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon.");
        e.target.reset();
    }

    return (
        <div className="container mx-auto py-10 lg:p-20">
            {/* Campaign Details Card */}
            <div className="bg-white shadow-xl rounded-lg p-6 mb-8 border-t-4 border-emerald-600">
                <h2 className="text-2xl font-extrabold text-center text-emerald-700">{campaign.title}</h2>
                <p className="mt-4 text-md text-gray-700">{campaign.description}</p>
                <p className="mt-2 text-md font-semibold text-gray-800">Status: <span className={`text-${campaign.status === 'active' ? 'green' : 'red'}-600`}>{campaign.status}</span></p>
                
                {/* Contact Info Section */}
                <div className="mt-4 flex items-center text-gray-600">
                    <FaEnvelope className="mr-2 text-xl text-gray-500" />
                    <p className="text-md">
                        Contact Info: <a href={`mailto:${campaign.contactInfo}`} className="text-emerald-600 hover:underline">{campaign.contactInfo}</a>
                    </p>
                </div>
                
                {/* Division Section */}
                <div className="mt-4 flex items-center text-gray-600">
                    <FaBoxOpen className="mr-2 text-xl text-gray-500" />
                    <p className="text-lg">Division: <span className="text-emerald-600">{campaign.division}</span></p>
                </div>
            </div>

            {/* Donation Form */}
            <div className="bg-white shadow-xl rounded-lg p-6 border-t-4 border-emerald-600">
                <h3 className="text-2xl font-semibold text-center text-emerald-700 mb-6">Donate to this Campaign</h3>
                <form onSubmit={handleCamp} className="space-y-6">
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-semibold  text-gray-700">Quantity of Items:</label>
                        <input
                            id="quantity"
                            type="text"
                            name="quantity"
                            placeholder="e.g., 2 jackets"
                            required
                            className="input input-bordered w-full p-3 rounded-lg shadow-md border-gray-300 focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="itemType" className="block text-sm font-semibold  text-gray-700">Item Type:</label>
                        <select
                            id="itemType"
                            name="itemType"
                            required
                            className="select select-bordered w-full p-3 rounded-lg shadow-md border-gray-300 focus:ring-2 focus:ring-emerald-400"
                        >
                            <option value="blanket">Blanket</option>
                            <option value="jacket">Jacket</option>
                            <option value="sweater">Sweater</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="pickupLocation" className="block text-sm font-semibold  text-gray-700">Pickup Location:</label>
                        <input
                            id="pickupLocation"
                            type="text"
                            name="pickupLocation"
                            placeholder="Your address"
                            required
                            className="input input-bordered w-full p-3 rounded-lg shadow-md border-gray-300 focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="notes" className="block text-sm font-semibold text-gray-700">Additional Notes (Optional):</label>
                        <textarea
                            id="notes"
                            name="notes"
                            placeholder="Any additional information"
                            className="textarea textarea-bordered w-full p-3 rounded-lg shadow-md border-gray-300 focus:ring-2 focus:ring-emerald-400"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className=" w-full mt-4 p-3 rounded-lg text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
                    >
                        Donate
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CampaignDetails;
