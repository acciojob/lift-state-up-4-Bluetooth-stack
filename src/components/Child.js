import React from "react";

const Child = ({name, price, removeItem, indx})=>{

    return(
       <li>
        {name} - ${price}<button onClick={()=>{removeItem(indx)}}>Remove</button>
       </li>
    )
}

export default Child;