import React from 'react'
import "./Footer.css"
import FacebookIcon from "../../assets/facebook_icon.png"
import InstagramIcon from "../../assets/instagram_icon.png"
import TwitterIcon from "../../assets/twitter_icon.png"
import YoutubeIcon from "../../assets/youtube_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src= {FacebookIcon} alt='icons'/>
        <img src= {InstagramIcon} alt='icons'/>
        <img src= {TwitterIcon} alt='icons'/>
        <img src= {YoutubeIcon} alt='icons'/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copy-right-text'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
