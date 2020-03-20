import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom"
import DevProfile from "../pages/DevCreateAccount"
import API from "../../utils/API";

function Personal(props) {
    const [user, setUser] = useState({
        firstName: "",
        lastName:"",
        emailAddress:"",
        devType:"",
        empType:"",
        language:"",
        location:"",
        profile:""
    })

    useEffect(()=>{
        loadUser("5e69af9b39a8906f28d61cea");
    }, []);
    function loadUser(id){
        API.getDev(id).then((data)=>{
            setUser(data.data);
        }).catch(err=>console.log(err));
    }
    return (

        <div className="card" style={{ height: "auto", width: "95%", margin: "5%", position: "relative", display: "flex" }}>
            <h2>{user.firstName} {user.lastName}</h2>
            <br />
            <p>{user.profile}</p>
                <ul>
                    <li>Developer Status: {user.devType}</li>
                    <li>Main development language: {user.language}</li>
                    <li>Location: {user.location}</li>
                </ul>

            <br />
            
            <h3>Contact Me!</h3>
            <ul>
                <li>Email: {user.emailAddress}</li>
            </ul>


            <Link to="/profile/dev" role="button" className="btn btn-secondary btn-block" style={{ position: "absolute", bottom: "5px" }}>
            View Profile
            </Link>
            <Route exact path="/dev-create-account" component={DevProfile} />


            {/* </div> */}
        </div>
    )
}
export default Personal;