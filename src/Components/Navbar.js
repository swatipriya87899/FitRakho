import React from "react";
import './Navbar.css';
import swati_avatar from '../Images/Swati_Pic.jpg'
import Searchbar from './Searchbar';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="company_name">FitRakho</div>
      <Searchbar search_input={props.search_input}></Searchbar>
      <div className="profile">
        <div className="avatar">
          <img
            src={swati_avatar}
            alt="avatar"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          ></img>
        </div>
        <div className="avatar_name">Swati Priya</div>
      </div>
    </div>
  );
};

export default Navbar;
