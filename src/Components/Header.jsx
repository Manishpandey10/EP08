import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnValue, setBtnValue]=useState("Login")

  // useEffect(()=>{},[])
    return (
      <div className="header" style={{ backgroundColor: "#DCD7FC" }}>
        <img
          className="logo"
          src={LOGO_URL}
        />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <button onClick={()=>{
              btnValue==="login"
              ?setBtnValue("logout"): setBtnValue("login")
            }}>{btnValue}</button>
            <li>
              <Link to="/about">About-us</Link>
            </li>
          
          </ul>
        </div>
      </div>
    );
  };

export default Header;