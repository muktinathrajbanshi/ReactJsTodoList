import React, { useState } from 'react'
import todoimg from "../images/todoimage.png";
import "../App.css";

const Todo = () => {

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if(!inputData){
      alert("plzz fill the data");

    } else if(inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if(elem.id === isEditItem) {
            return{...elem, name:inputData}
          }
          return elem;
        })
      )
    }else {
      const allInputData = { id: new Date().getTime().toString(), name:inputData }
      setItems([...items, allInputData]);
      setInputData("")
    }
  }
  
  const deleteItem = (index) => {
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updatedItems);
  }

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id
    });
    console.log(newEditItem);
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  }

  const removeAllItems = () => {
    setItems([]);
  }

  return (
    <>
      <div className="main_div">
        <div className="child_div">
            <figure>
                <img src={todoimg} alt="todologo" />
                <figcaption>Add Your List Here ✌️</figcaption>
            </figure>

            <div className="addItems">
                <input type="text" placeholder="✍️ Add Items..." 
                  value={inputData}
                  onChange={(event) => setInputData(event.target.value) }
                />
                {
                  toggleSubmit ? <i className="fa-solid fa-plus add-btn" title="Add Item" onClick={addItem}></i> :
                  <i className="fa-solid fa-pen-to-square update-btn" title="Update Item" onClick={addItem}></i>
                }
            </div>
            <div className="showItems">
                {
                  items.map((elem) => {
                    return (
                       <div className="eachItem" key={elem.id}>
                        <h3>{ elem.name }</h3>
                        <div className="icon-group">
                        <i className="fa-solid fa-pen-to-square edit-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                        <i className="fa-solid fa-trash delete-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}></i>
                        </div>
                      </div>
                    )
                  })
                }
            </div>
            <div className="showItems">
              <button className="btn effect-04" data-sm-link-text="Remove All" onClick={removeAllItems}><span>CHECK LIST</span></button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
