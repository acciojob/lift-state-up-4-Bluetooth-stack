import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    let [list, setList] = useState([]);
    let [itemName, setItemName] = useState('');
    let [itemPrice, setItemPrice] = useState('');


    function addToList() {
        if (itemName && itemPrice) {
            let obj = {
                name: itemName,
                price: itemPrice,
            }
            setList([...list, obj]);
            setItemPrice('');
            setItemName('');
        }
        document.getElementById('itemName').value=''
        document.getElementById('itemPrice').value=''
    }

    function remove(index) {
        let update = [...list];
        update.splice(index, 1);
        setList(update);
    }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <label>Item Name:</label>
            <input type="text" id="itemName" onChange={(e)=>{setItemName(e.target.value)}}/>
            <label>Item Price:</label>
            <input type="text" id="itemPrice" onChange={(e)=>{ setItemPrice(e.target.value);}}/>
            <button onClick={addToList}>Add Item</button>

            <Child list={list} removeItem={(index)=>{remove(index)}} ></Child>
        </div>
    )
}

export default Parent;