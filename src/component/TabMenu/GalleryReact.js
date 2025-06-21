import React, { useState } from 'react';
import "../TabMenu/tab.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Menu from './menu';
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';

const GalleryReact = () => {

  const [items, setItems] = useState(Menu);

  const filterMenu = (catItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === catItem;
    });
    setItems(updatedItems);
  }

  return (
    <>
      <h1 className="mt-5 mb-5 text-center main-heading">Order Your Favourite Dish</h1>
      <hr />

      {/* our menu lists */}
      <CatMenu filterMenu={filterMenu} />
      {/* my main items section */}
      <MenuItems items={items}/>
      
    </>
  );
};

export default GalleryReact;
