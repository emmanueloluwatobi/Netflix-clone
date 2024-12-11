import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/linkedin.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
      <a href="https://www.facebook.com/emmanuel.oluwatobi.7583" target="_blank" rel="noopener noreferrer">
        <img src={facebook_icon} alt="Facebook Profile" />
      </a>
      <a href="https://www.instagram.com/Emmanuel_oluwatobi3" target="_blank" rel="noopener noreferrer">
        <img src={instagram_icon} alt="" />
      </a>
      <a href="https://twitter.com/Emmanuel686?s=09" target="_blank" rel="noopener noreferrer">
        <img src={twitter_icon} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/emmanuel-oluwatobi-8a35b2226" target="_blank" rel="noopener noreferrer">
        <img src={youtube_icon} alt="" />
      </a>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright'>© 2024 Emmanuel. Made with passion and coffee ☕❤️</p>
    </div>
  )
}

export default Footer
