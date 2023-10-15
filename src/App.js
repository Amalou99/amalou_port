import './App.css';
import React from 'react';
import Header from './components/HeaderComponent/Header';
import Article from './components/articlesComponent/Article';
import Footer from './components/FooterComponent/Footer';
import Contact from './components/ContactComponent/Contact';
import About from './components/AboutComponent/About';
import Home from './components/HomeComponent/Home';
import Recentarticles from './components/RecentArticlesComponent/RecentArticles';
import Skills from './components/SkillsComponent/Skills';
function App() {
  
  return (
    <div className="App">
      <Header />
      <Home />
      <Recentarticles />
      <About />
      <Article />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
