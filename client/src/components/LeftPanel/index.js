import React from "react";

const LeftPanel = (props)=>{
    return(
        <div className="col-2">
            {props.children}
        </div>
    )
}

export default LeftPanel;