import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import Logo from "../../assets/logo.png"
import SearchIcon from "../../assets/search_icon.svg"
import BellIcon from "../../assets/bell_icon.svg"
import ProfileIcon from "../../assets/profile_img.png"
import DropDownIcon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase'

const Navbar = () => {
  const navRef = useRef()
  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  
  return (
    <div>
      <div ref = {navRef} className="navbar">
        <div className="navbar-left">
            <img src= {Logo} alt='Netflix-Logo' />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Language</li>
            </ul>
        </div>
        <div className="navbar-right">      
            <img src = {SearchIcon} alt= "Search-Icon" className='icons'/>
            <p>Children</p>
            <img src = {BellIcon} alt= "Bell-Icon" className='icons'/>
            <div className="navbar_profile">
                <img src = {ProfileIcon} alt= "Profile-Icon" className='profile'/>
                <img src = {DropDownIcon} alt= "DropDown-Icon"/>
                <div className="dropdown"><p onClick={()=>{logout()}}>Sign Out of Netflix</p></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
