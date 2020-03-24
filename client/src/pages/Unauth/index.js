import React from "react";
import { Link } from "react-router-dom";
import stop from "../../assets/stop.png"

// style:
import "./style.css";

class Unauth extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="col-sm-12">
            {/* <img className="card-img-top" src={baby} alt="baby" /> */}
            <div className="card border-0">
              <img className="card-img-top" src={stop} alt="stop_sign" />
              <div className="card-body">
                <h2>Unauthorized </h2>
                <h4>Access to this page is denied</h4>
                <p>You can click <Link to="/">here</Link> to go back to the homepage</p>
              </div>
            </div>
          </div>
        </div>
      </>        
    );
  };
}

export default Unauth;
