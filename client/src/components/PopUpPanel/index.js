import React from "react";
import "./style.css";

const PopUpPanel = (props)=>{
    return(
        <div className="popup">
            {props.children}
        </div>
    )
}

export default PopUpPanel;