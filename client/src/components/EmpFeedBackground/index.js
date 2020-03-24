import React from "react";

function EmpFeedBackground (props) {
    return (
        <div className="EmpFeedBackground" style = {{ backgroundImage: `url(${props.background})` }}>
            {props.children}
        </div>
    );
    
}

export default EmpFeedBackground;