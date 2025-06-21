import React from 'react';

const CatMenu = ({filterMenu}) => {
  return (
    <>
       <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around">
                <button className="btn btn-warning" onClick={() => filterMenu("breakfast")}>Breakfast</button>
                <button className="btn btn-warning"onClick={() => filterMenu("lunch")}>Lunch</button>
                <button className="btn btn-warning"onClick={() => filterMenu("evening")}>Evening</button>
                <button className="btn btn-warning"onClick={() => filterMenu("dinner")}>Dinner</button>
                {/* <button className="btn btn-warning"onClick={() => setItems(Menu)}>All</button> */}

            </div>
      </div>
    </>
  );
};

export default CatMenu;
