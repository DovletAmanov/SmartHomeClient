import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';

class AboutProjectScreen extends Component{

    render(){
        return(

            <Auxiliary>

                <section id="welcoming">
                    <h1>Bring innovation to your home</h1>
                    <p>When we are not at home little doubts can arise in our minds. Imagine a smart home system that informs you about the home status and enables you to control your home from anywhere in the world with a simple click.
                    You can turn on/off your lights, see the change of heat and humidity in the rooms, protect your home from gas leak and burglars under favour of gas and sound sensors.
                    More importantly, smart home asisstant will learn your habits and give you suggestions according to them. 
                    Try our smart home model to make your life easy and convenient!
                
                    </p>
                </section>
                

                <section id="advertising">
                <div className="mobilead">
                    <div className="ptext">
                        <span className="border">
                            Check & Control Home via Mobile App
                        </span>
                    </div>
                </div>

                <section id="boxes">
                    <div className="container">
                        <div className="box">
                        <img src="./img/status.png" alt="img"/>
                        <h3>Checking Home Status</h3>
                        <p>Stay informed about your home status</p>
                        </div>
                        <div className="box">
                        <img src="./img/security.png" alt="img"/>
                        <h3>Security</h3>
                        <p>System will notify you in case of threat detection</p>
                        </div>
                        <div className="box">
                        <img src="./img/support.png" alt="img"/>
                        <h3>Assistant Support</h3>
                        <p>Assistant will help you if you want to get voice data</p>
                        </div>
                    </div>
                </section>

                <div className="assisstantad">
                    <div className="ptext">
                        <span className="border">
                            Get Help From Smart Assistant
                        </span>
                    </div>
                </div>

                </section>
            </Auxiliary>

        )
    }
}

export default AboutProjectScreen;