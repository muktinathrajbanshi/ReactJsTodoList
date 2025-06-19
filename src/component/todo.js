import React from 'react'
import todoimg from "../images/todoimage.png";
import "../App.css";

const Todo = () => {
  return (
    <>
      <div className="main_div">
        <div className="child_div">
            <figure>
                <img src={todoimg} alt="todologo" />
                <figcaption>Add Your List Here ✌️</figcaption>
            </figure>

            <div className="addItems">
                <input type="text" placeholder="✍️ Add Items..." />
                <i className="fa-solid fa-plus add-btn" title="Add Item"></i>
            </div>

            <div className="showItems">
                <div className="eachItem">
                    <h3>apple</h3>
                    <i className="fa-solid fa-trash delete-btn" title="Delete Item"></i>
                </div>
            </div>
            <div className="showItems">
              <button className="btn effect-04" data-sm-link-text="Remove All"><span>CHECK LIST</span></button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
