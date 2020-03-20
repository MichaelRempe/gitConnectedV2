import React from "react";


const PopUpPanel = (props)=>{
    return(
        <div className="col-5">
            {props.children}
        </div>
    )
}

export default PopUpPanel;