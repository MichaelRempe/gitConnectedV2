import React from "react";
import "./style.css";

const MainPanel = (props)=>{
    return(
        <div className="middle">
            {props.children}
        </div>
    )
}

export default MainPanel;