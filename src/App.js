import React, { Component } from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contacto/Contact';
import Footer from './components/footer/Footer';


class App extends Component {
  
  render() { 
    return ( 
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
     );
  }
}
 
export default App;