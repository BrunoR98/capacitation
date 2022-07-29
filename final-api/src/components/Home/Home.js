import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import UserContext from "../../contexts/UserContext";

export default function Home () {
    const user = useContext(UserContext);
    
    return(
        <div className="home-wrapper">
            <div className="home">
                <h1>Welcome, {user.username}</h1>
            </div>
            <button><Link to='/Login'>Log In</Link></button>
            <button><Link to='/Register'>Register</Link></button>
        </div>
    )
}