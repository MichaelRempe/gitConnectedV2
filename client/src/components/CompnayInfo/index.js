import React from "react";

// style:
import "./style.css";

const UserInfo = props => {
  console.log(props);
  return (
    <div className="card">
      <div className="card-title">{`${props.user.companyName}`}</div>
      <div className="card-body">
        <p>{props.user.about}</p>
      </div>
    </div>
  );
};

export default UserInfo;
