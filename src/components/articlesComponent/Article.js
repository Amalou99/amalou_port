import React from 'react';
import Card from '../CardComponent/Card';
import './article.css'
function Article() {
  const cards = [
    {title:"Why Kafka",description:"Apache Kafka is massively scalable because it allows data to be distributed across multiple servers, and it's extremely fast because it decouples data streams, which results in low latency."},
    {title:"Java in th sky",description:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."},
    {title:"Tamazirt: why and where",description:"Tinghir est située entre les montagnes du haut Atlas et celles de Saghro, elle est perchée à plus de 1 300 m d'altitude avec des pics pouvant atteindre 3 000 m d'altitude au nord."},
    {title:"Devoox Morocco Goals",description:"DEVOXX MOROCCO is the largest developer conference in Africa & Middle East region, which aims to enable local and international technology experts to share their knowledge and expertise."},
    {title:"Java in th sky",description:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."},
    {title:"Ichem the world capial",description:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."},
    {title:"CSS is fils de pute",description:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."},
    {title:"Morocco vs Ivory Coast: to night",description:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."}
  ]
  return (
    <div>
      <h1> Articles</h1>
      <div className='articles grid-container'>
        {cards.map((card => <Card card={card} />))}
      </div>
    </div>
    
    
  );
}

export default Article;