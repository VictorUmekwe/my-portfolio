import React from "react";
import AboutImg from "../assets/images/FB_IMG_1735380517138.jpg";
import ViewWorkBtn from "./ViewWorkBtn";
const About = () => {
  return (
    <div className=" bg-dark text-light py-5" id="about">
      <div className=" container">
        <div className=" flex-column-reverse flex-md-row row">
          <div className=" col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
                <img
                className=" img-fluid w-75 shadow "
                src={AboutImg}
                alt="about img"/>
          </div>
          <div className=" col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 className=" mb-5">About Me</h2>
            <p className=" text-start mb-5">
              My name is Umekwe Chigozie Victor a fullstack web developwer with
              with 2 years experience in creating and managing websites and
              webapps, and i love all things tech. When i'm not writing codes,
              i'm probably reading up on the latest development trends or
              practicing my sketching. Venturing into tech was the best thing
              that happened to me and since i have never looked back. I'm always
              looking for new challenges and opportunities, and I'm excited to
              see what the future holds for me in the world of tech. Thanks for
              reading!
            </p>
            <ViewWorkBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
