import React from "react";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";


const App = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Projects/>
    
    </>
  );
};

export default App;
