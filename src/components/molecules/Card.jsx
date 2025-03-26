import "../../styles/Card.css";
import Title from "../atoms/Title";

function Card({ title, content }) {
    return (
        <div className="card">
            <Title text={title} />
            <p>{content}</p>
        </div>
    );
}

export default Card;
