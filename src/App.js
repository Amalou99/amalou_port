import './App.css';
import React from 'react';
import Header from './components/HeaderComponent/Header';
import Article from './components/articlesComponent/Article';
import Footer from './components/FooterComponent/Footer';
import Contact from './components/ContactComponent/Contact';
import Portfolio from './components/PortfolioComponent/Portfolio';
function App() {
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
    <div className="App">
      <Header />
      <Article cards={cards} />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
