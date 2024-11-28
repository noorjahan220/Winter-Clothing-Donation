import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

const CampaignDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const campaign = data.find((item) => item.id === parseInt(id));

    if (!campaign) {
        return <p>Campaign not found!</p>;
    }

    const handleCamp = e => {
        e.preventDefault();
        toast.success( "“ Thank you ! We will reach your destination soon”");
        e.target.reset();
    }
    return (
        <>
          
                <h2>{campaign.title}</h2>
                
                <p>{campaign.description}</p>
                <p>Status: {campaign.status}</p>
                <p>Contact Info: <a href={`mailto:${campaign.contactInfo}`} className="text-blue-500">{campaign.contactInfo}</a></p>
                <p>Division: {campaign.division}</p>
            
            <h3>Donate to this Campaign</h3>
            <form onSubmit={handleCamp} className="space-y-2 card-body">
                <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity of Items:</label>
                    <input
                        id="quantity"
                        type="text"
                        name="quantity"
                        placeholder="e.g., 2 jackets"
                        required
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label htmlFor="itemType" className="block text-sm font-medium text-gray-700">Item Type:</label>
                    <select
                        id="itemType"
                        name="itemType"
                        required
                        className="select select-bordered w-full"
                    >
                        <option value="blanket">Blanket</option>
                        <option value="jacket">Jacket</option>
                        <option value="sweater">Sweater</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">Pickup Location:</label>
                    <input
                        id="pickupLocation"
                        type="text"
                        name="pickupLocation"
                        placeholder="Your address"
                        required
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Additional Notes (Optional):</label>
                    <textarea
                        id="notes"
                        name="notes"
                        placeholder="Any additional information"
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-full mt-4"
                >
                    Donate
                </button>
            </form>
        </>
    );
};

export default CampaignDetails;
