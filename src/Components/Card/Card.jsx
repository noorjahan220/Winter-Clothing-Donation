

const Card = ({ card }) => {
    const { title} = card || {};
    return (
        <div>
            <h2>{title}</h2>
            <button className="btn">Donate Now</button>
        </div>
    );
};

export default Card;