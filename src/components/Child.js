import React from "react";

const Child = ({list, removeItem})=>{

    return(
        <div className="child">
                <h3>Child Component</h3>
                <ul>
                   { 
                        list.map((ele, ind)=>(
                                <li>
                                    {ele.name} - ${ele.price}<button onClick={()=>{removeItem(ind)}}>Remove</button>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
    )
}

export default Child;