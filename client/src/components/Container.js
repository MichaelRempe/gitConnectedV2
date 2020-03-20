import React from "react";

function Container(props){
    return(
        <div className="container-fluid" style={{position: "relative", height: "100%vh"}}>{props.children}</div>
    )
}

export default Container;