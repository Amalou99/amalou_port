import React from 'react';
import './home.css'; // Import your CSS file
import sideImage from './hakimi.jpg'; // Import your side image

function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="text-presentation">
          <h2>Hello world !</h2>
          <p className='intro'>Hi, this is Maymoun EL-FAHIM.</p>
          <p>
          I'm a software developer and a Devops enthusiast based in Paris, France
          </p>
        </div>
        <div className="side-image">
          <img src={sideImage} alt="Your Side Image" className="image-fade-in" />
        </div>
      </div>
    </div>
  );
}

export default Home;