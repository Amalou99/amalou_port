import React from 'react';
import './card.css'; // Import your CSS file
import kafkaImg from './kafka.jpg';
function Card(props) {
    props=props.card;
  return (
    <div className="card">
        <div >
            <img src={kafkaImg} alt="Card Image" className="card-image"  />
        </div>
        <div className="card-content">
            <h2 className="card-title">{props.title}</h2>
            <p className="card-description">{props.description}</p>
        </div>
    </div>
  );
}

export default Card;