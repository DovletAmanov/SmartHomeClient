import React, {Component} from 'react';
import {SocialIcon} from 'react-social-icons';
import Auxiliary from './hoc/Auxiliary';

class ContactScreen extends Component{

    render(){
        return(

            <Auxiliary>
                <br />
                <br />
                <br />
                <br />
                <section id="profile-card-section">

                <div class="profile-card">
                    <img src="./img/dovik.png" alt="dovik" style={{ width:'100%'}}/>
                    <h1>Dovik</h1>
                    <p class="profile-title">IoT Developer</p>
                    <p>"Imagine Jing Yang coding in ReactJS"</p>
                        <a href="#"><SocialIcon url="https://www.facebook.com/" /></a>
                        <a href="#"><SocialIcon url="https://twitter.com/" /></a>
                        <a href="#"><SocialIcon url="https://www.youtube.com/" /></a>
                        <a href="#"><SocialIcon url="https://plus.google.com/" /></a>
                    <p><button className="profile-button">Email</button></p>
                </div>

                <div class="profile-card">
                    <img src="./img/anton.png" alt="anton" style={{ width:'100%'}}/>
                    <h1>Anton</h1>
                    <p class="profile-title">Web Developer</p>
                    <p>"I'm coming from cold lands, but I code hot"</p>
                        <a href="#"><SocialIcon url="https://www.facebook.com/" /></a>
                        <a href="#"><SocialIcon url="https://twitter.com/" /></a>
                        <a href="#"><SocialIcon url="https://www.youtube.com/" /></a>
                        <a href="#"><SocialIcon url="https://plus.google.com/" /></a>
                    <p><button className="profile-button">Email</button></p>
                </div>

                <div class="profile-card">
                    <img src="./img/belemir.png" alt="belemir" style={{ width:'100%'}}/>
                    <h1>Belemir</h1>
                    <p class="profile-title">Mobile Developer</p>
                    <p>"I'm like a Coding Panda"</p>
                        <a href="#"><SocialIcon url="https://www.facebook.com/" /></a>
                        <a href="#"><SocialIcon url="https://twitter.com/" /></a>
                        <a href="#"><SocialIcon url="https://www.youtube.com/" /></a>
                        <a href="#"><SocialIcon url="https://plus.google.com/" /></a>
                    <p><button className="profile-button">Email</button></p>
                </div>
                
                </section>

            </Auxiliary>

        )
    }
}

export default ContactScreen;