import React from "react";
import ViewWorkBtn from "./ViewWorkBtn";
import HeroImg from '../assets/images/20241104_155018.jpg'

const Hero = () => {
  return (
    <section className=" pt-5 min-vh-100 d-flex justify-content-center align-items-center" id="hero">
      <div className=" container py-md-5">
        <div className=" row">
          <div className=" col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0">
            <h3 className=" text-secondary fw-bold lh-1">Victor Umekwe</h3>
            <h1 className=" text-capitalize text-start text-primary lh-1 mb-5 ">
              FullStack <br />
              Web Developer
            </h1>
            <ViewWorkBtn />
          </div>

          <div className=" col-md-6 d-flex justify-content-center justify-content-md-end">
               <img className=" img-fluid w-75 rounded-circle shadow my-5" src={HeroImg} alt="hero img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
