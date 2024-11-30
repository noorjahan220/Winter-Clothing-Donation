import React from 'react';
import 'daisyui/dist/full.css';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  const goal = card.goal || 16000;
  const raised = card.raised || 8700;
  const description =
    card.description ||
    'We help local nonprofits access the funding, tools, training, and support they need to thrive.';
  const progress = Math.min((raised / goal) * 100, 100); 
  const categoryColor = 'Cloth'; // Set the category color statically to 'Cloth'

  // Always use 'bg-emerald-500' for category color
  const categoryColorClass = 'bg-emerald-500'; 

  return (
    <div className="card bg-white shadow-xl border border-gray-200 rounded-lg hover:shadow-2xl transition-all">
      <figure className="relative">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <span className={`absolute top-2 left-2 ${categoryColorClass} text-white px-2 py-1 rounded text-xs`}>
          {categoryColor} {/* Display static category as 'Cloth' */}
        </span>
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {card.title || 'A Little Help Goes a Long Way'}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        <div className="mt-3">
          <progress
            className={`progress w-full ${categoryColorClass}`}
            value={progress}
            max="100"
          ></progress>
          <div className="flex justify-between text-xs mt-1 text-gray-600">
            <span>Goal: ${goal.toLocaleString()}</span>
            <span>Raised: ${raised.toLocaleString()}</span>
            <span>To Go: ${(goal - raised).toLocaleString()}</span>
          </div>
        </div>
        <Link to={`/campaign/${card.id}`}>
          <button className={`py-2 rounded-lg w-full mt-3 ${categoryColorClass} hover:bg-emerald-600 text-white`}>
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
