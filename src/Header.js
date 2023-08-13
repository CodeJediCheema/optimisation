import { LOGO_URL } from "./utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "./utils/useOnlineStatus";
import Grocery from "./Grocery";


const Header = () =>{
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    
  
    useEffect(()=>{
        console.log("Use effect called");
    },[btnName]);
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>

            </div>
            <div className="nav-items">
                <ul className="nav">
                    <li>Status:{onlineStatus ? "🟢" : "🔴"}</li>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li> <Link to="/contact">Contact Us</Link></li>
                    <li> <Link to= "/grocery"> Grocery</Link> </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                        
                    }}> {btnName}</button>
                </ul>

            </div>
        </div>
        
    )
};

export default Header;