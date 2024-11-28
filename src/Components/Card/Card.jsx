import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { title} = card || {};
    return (
        <div>
            <h2>{title}</h2>
            <Link to='/details' className="btn">Donate Now</Link>
        </div>
    );
};

export default Card;