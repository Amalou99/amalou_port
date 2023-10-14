import React from 'react';
import Card from '../CardComponent/Card';
import './article.css'
function Article(props) {
  return (
    <div className='articles grid-container'>
        {props.cards.map((card => <Card card={card} />))}
    </div>
    
  );
}

export default Article;