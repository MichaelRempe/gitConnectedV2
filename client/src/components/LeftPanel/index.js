import React from "react";
import "./style.css";

const LeftPanel = (props)=>{
    return(
        <div className="col-2 leftPanel">
            {props.children}
        </div>
    )
}

export default LeftPanel;