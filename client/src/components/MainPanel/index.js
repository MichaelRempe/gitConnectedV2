import React from "react";


const MainPanel = (props)=>{
    return(
        <div className="col-5">
            {props.children}
        </div>
    )
}

export default MainPanel;