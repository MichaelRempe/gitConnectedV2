import React from "react";
import "./style.css";

const MainPanel = (props)=>{
    return(
        <div className="col-5">
            {props.children}
        </div>
    )
}

export default MainPanel;