import React from "react";
import { Link } from "react-router-dom";

// style:
import baby from "../../assets/crying_baby.jpg";
import "./style.css";

class ErrorPage extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="card border-0">
                <div className="card-body">
                  <h2>Oh No!</h2>
                  <h3>Are you lost?</h3>
                  <h4>We can't find the page that you're looking for.</h4>
                  <p>You can click <Link to="/">here</Link> to go back to the homepage </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card baby border-0">
                <img className="card-img-top" src={baby} alt="baby" />
              </div>
            </div>
          </div>
        </div> 
      </>        
    );
  };
}

export default ErrorPage;
