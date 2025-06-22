import React, { useState } from 'react';
import "../TabMenu/tab.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Menu from './menu';
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';

const allCatValues = [...new Set(Menu.map((curElem) => curElem.category )), "all"];

console.log(allCatValues);

const GalleryReact = () => {

  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] =useState(allCatValues);

  const filterMenu = (category) => {
    
    if (category === "all") {
      setItems(Menu);
      return;
    }

    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setItems(updatedItems);
  }

  return (
    <>
      <h1 className="mt-5 mb-5 text-center main-heading">Order Your Favourite Dish</h1>
      <hr />

      {/* our menu lists */}
      <CatMenu filterMenu={filterMenu} catItems={catItems} />
      {/* my main items section */}
      <MenuItems items={items}/>
      
    </>
  );
};

export default GalleryReact;
