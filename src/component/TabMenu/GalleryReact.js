import React, { useState } from 'react';
import "../TabMenu/tab.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Menu from './menu';

const GalleryReact = () => {

  const [items, setItems] = useState(Menu);

  return (
    <>
      <h1 className="mt-5 mb-5 text-center main-heading">Order Your Favourite Dish</h1>
      <hr />
      <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around">
                <button className="btn btn-warning">Breakfast</button>
                <button className="btn btn-warning">Lunch</button>
                <button className="btn btn-warning">Evening</button>
                <button className="btn btn-warning">Dinner</button>
                <button className="btn btn-warning">All</button>

            </div>
      </div>
      {/* my main items section */}
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">

            {
              items.map((elem) => {
                const {id, name, image, description, price} = elem;

                return(
                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                    <div className="row Item-inside mx-1">
                        {/* for image */}
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} alt={name} className="img-fluid" />
                      </div>
                      {/* menu item description */}
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between">
                            <h2>Price : {price}</h2>
                            <a href="#">
                              <button className="btn btnUpdate">Order Now</button>
                            </a>
                          </div>
                          <p>*Prices may vary on selected date.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
