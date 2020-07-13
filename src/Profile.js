import React from 'react';
import './assets/css/main.css'
import avatar from './images/avatar.jpg'
import { SocialIcon } from 'react-social-icons';

const Profile = (props) => {
  return (
      <div id="wrapper">
        {/* Main */}
        <br/><br/><br/>
        <section id="main">
          <header>
            <span className="avatar"><img src={avatar} alt="" /></span>
            <h1  style={{fontWeight : "bold"}}>Ajay Menon</h1>
            <p style={{fontWeight : "bold", color:"#f02274"}}>Web developer</p>
          </header>
          <footer>
            <ul className="icons">
              <li><SocialIcon url="https://twitter.com/Ajay_A_Menon"/></li>
              <li><SocialIcon url="https://github.com/AjayMenon23"/></li>
              <li><SocialIcon url="https://facebook.com/ajay.menon.023"/></li>
            </ul>
          </footer>
        </section>
        {/* Footer */}
       
      </div>
    );
}

export default Profile;

