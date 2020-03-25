import React from "react";
import "./style.css";

const PopUpPanel = (props)=>{
    return(
        <div className="popup col-md-5">
            {props.children}
        </div>
    )
}

export default PopUpPanel;