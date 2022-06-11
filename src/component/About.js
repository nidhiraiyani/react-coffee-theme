import React from "react";
import about from "../images/about.jpg";

function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <img src={about} alt="about" className="img-fluid rounded" />
          <div className="bg-light rounded py-4 px-5 cafe my-3">
            <h6 className="text-uppercase">Strong Coffee, Strong Roots</h6>
            <h2 className="text-uppercase">About Our Cafe</h2>
            <p>
              Founded in 1987 by the Hernandez brothers, our establishment has
              been serving up rich coffee sourced from artisan farmers in
              various regions of South and Central America. We are dedicated to
              travelling the world, finding the best coffee, and bringing back
              to you here in our cafe.
            </p>
            <p>
              We guarantee that you will fall in lust with our decadent blends
              the moment you walk inside until you finish your last sip. Join us
              for your daily routine, an outing with friends, or simply just to
              enjoy some alone time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
