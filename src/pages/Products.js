import React from "react";
import product1 from "../images/products-01.jpg";
import product2 from "../images/products-02.jpg";
import product3 from "../images/products-03.jpg";

function Products() {
  return (
    <>
      <div className="products">
        <div className="bg-light tea py-5 px-5 rounded mt-5 container mb-3">
          <h6 className="text-uppercase">blended to perfection</h6>
          <h2 className="text-uppercase">coffees & teas</h2>
        </div>
        <div className="container">
          <img
            src={product1}
            alt="products1"
            className="img-fluid rounded proimg"
          />
        </div>
        <div className="bg-light detail p-5 rounded mt-3 container">
          <p>We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced black coffee, you will be coming back for more.</p>
        </div>
      </div>


      <div className="products">
        <div className="bg-light tea1 py-5 px-5 rounded mt-5 container mb-3">
          <h6 className="text-uppercase">delicious treats, good eats</h6>
          <h2 className="text-uppercase">bakery & kitchen</h2>
        </div>
        <div className="container">
          <img
            src={product2}
            alt="products2"
            className="img-fluid rounded proimg"
          />
        </div>
        <div className="bg-light detail1 p-5 rounded mt-3 container">
          <p>Our seasonal menu features delicious snacks, baked goods, and even full meals perfect for breakfast or lunchtime. We source our ingredients from local, oragnic farms whenever possible, alongside premium vendors for specialty goods.</p>
        </div>
      </div>


      <div className="products">
        <div className="bg-light tea2 py-5 px-5 rounded mt-5 container mb-3">
          <h6 className="text-uppercase">from around the world</h6>
          <h2 className="text-uppercase">bulk speciality blends</h2>
        </div>
        <div className="container">
          <img
            src={product3}
            alt="products3"
            className="img-fluid rounded proimg"
          />
        </div>
        <div className="bg-light detail2 p-5 rounded mt-3 container">
          <p>Travelling the world for the very best quality coffee is something take pride in. When you visit us, you'll always find new blends from around the world, mainly from regions in Central and South America. We sell our blends in smaller to large bulk quantities. Please visit us in person for more details.</p>
        </div>
      </div>
    </>
  );
}

export default Products;
