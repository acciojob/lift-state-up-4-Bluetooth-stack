import React from "react";

const Child = ({name, price, removeItem, indx})=>{

    return(
        <div>
            {name} - ${price}<button onClick={()=>{removeItem(indx)}}>Remove</button>
        </div>
    )
}

export default Child;