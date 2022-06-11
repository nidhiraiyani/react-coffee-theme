import React from "react";
import intro from "../images/intro.jpg";
function Home() {
  return (
    <>
      <div className="fresh clearfix text-center">
        <div className="container">
          <div className="position-relative">
            <img
              src={intro}
              alt="intro"
              className="img-fluid rounded intro"
            />
                <div className="bg-light fresh1 p-5 rounded mt-5">
                  <h6 className="text-uppercase">fresh coffee</h6>
                  <h2 className="text-uppercase">worth drinking</h2>
                  <p>
                    Every cup of our quality artisan coffee starts with locally
                    sourced, hand picked ingredients. Once you try it, our
                    coffee will be a blissful addition to your everyday morning
                    routine - we guarantee it!
                  </p>
                  <div className="visit">
                    <button className="btn btn-warning text-black fw-bold button1">Visit Us Today!</button>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <div className="container-fluid home text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto border border-4 border-secondary rounded-3 home1">
              <div className="position-relative promise bg-light rounded">
                <h6 className="text-uppercase">our promise</h6>
                <h2 className="text-uppercase">to you</h2>
                <p>
                  When you walk into our shop to start your day, we are
                  dedicated to providing you with friendly service, a welcoming
                  atmosphere, and above all else, excellent products made with
                  the highest quality ingredients. If you are not satisfied,
                  please let us know and we will do whatever we can to make
                  things right!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
