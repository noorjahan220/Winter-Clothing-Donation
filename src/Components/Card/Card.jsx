import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  return (
    <div className="card">
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <Link to={`/campaign/${card.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default Card;