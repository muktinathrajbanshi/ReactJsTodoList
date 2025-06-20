import React from 'react';
import "../TabMenu/tab.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Menu from './menu';

const GalleryReact = () => {
  return (
    <>
      <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
      <hr />
      <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around">
                <button className="btn btn-warning">Breakfast</button>
            </div>
      </div>
    </>
  );
};

export default GalleryReact;
