import React from "react";
import About from '../component/About'


function Store() {
  return (
    <>
      <div className="container-fluid home text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto border border-4 border-secondary rounded-3 home1">
              <div className="position-relative promise bg-light rounded store">
                <h6 className="text-uppercase">Come on in</h6>
                <h2 className="text-uppercase">we're open</h2>
                
                <ul className="list-unstyled">
                  <li className="d-flex border-bottom border-primary pt-3 pb-1 text-black">
                    <i className="text-capitalize">sunday</i>
                    <i className="text-capitalize ms-auto">closed</i>
                  </li>
                  <li className="d-flex border-bottom border-primary pt-3 pb-1 text-black">
                    <i className="text-capitalize">monday</i>
                    <i className="text-capitalize ms-auto">7:00 AM to 8:00 PM</i>
                  </li>
                  <li className="d-flex border-bottom border-primary pt-3 pb-1 text-black">
                    <i className="text-capitalize">tuesday</i>
                    <i className="text-capitalize ms-auto">7:00 AM to 8:00 PM</i>
                  </li>
                  <li className="d-flex border-bottom border-primary pt-3 pb-1 text-black">
                    <i className="text-capitalize">wednesday</i>
                    <i className="text-capitalize ms-auto">7:00 AM to 8:00 PM</i>
                  </li>
                  <li className="d-flex border-bottom border-primary pt-3 pb-1 text-black">
                    <i className="text-capitalize">thursday</i>
                    <i className="text-capitalize ms-auto">7:00 AM to 8:00 PM</i>
                  </li>
                  <li className="d-flex border-bottom border-primary pt-3 pb-1 text-black">
                    <i className="text-capitalize">friday</i>
                    <i className="text-capitalize ms-auto">7:00 AM to 8:00 PM</i>
                  </li>
                  <li className="d-flex border-bottom border-primary text-primary pt-3 pb-1 fw-bold">
                    <i className="text-capitalize">saturday</i>
                    <i className="text-capitalize ms-auto">9:00 AM to 5:00 PM</i>
                  </li>
                </ul>
                <p className="mb-5">
                  <strong>1116 Orchard Street</strong>
                  <br />
                  Golden Valley, Minnesota
                </p>
                <p className="mb-0">
                  <small>Call Anytime</small>
                  <br />
                  (317) 585-8468
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
}

export default Store;
