import React from "react";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Projects/>
      <Contact/>
      <Footer/>
    
    </>
  );
};

export default App;
