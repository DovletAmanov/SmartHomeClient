import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';

class NotFound extends Component{

    render(){
        return(
            <Auxiliary>
                <section id="aboutshowcase">
                    <div className="container">
                        <h1>About Project</h1>
                    </div>
                </section>

                <section id="aboutsection">
                    <div className="aboutintro">
                    <h1>About Project</h1><br/>
                                <p>
                                It is obvious that nowadays smart devices are being more important and more useful in our life. In this project, our aim is to build a reliable smart home simulator which can be controlled remotely that ensures our comfort and security. As we mentioned that the simulator that we build can be controlled remotely via internet from all over the world including assistant support. 
                                </p><br/>
                                <p>Our web and mobile applications offers features like getting and monitoring data from heat and humidity sensor, rain sensor, light sensor, dangerous gas or smoke sensor and motion sensor. Gas/smoke sensor and motion are programmed to send notifications to user in case there is an event that emitted from those sensors. Garage door and lights can be easily controlled via the applications which we mean open/close the door or switching on/off the lights. So, there will be efficiency in electricity usage and ease of use. 
                                </p><br/>
                                <p>In our mobile application, we can also get home status data as a voice output from assistant. Reason behind this feature was to assist blind people, so they can also benefit from our application too. We used technologies such as ReactJS, React Native, NodeJS, Socket.io, Firebase and Text to Speech in period of implementation phase.
                                </p>
                    </div>
                    
                    <div className="aboutfeatures">
                        <div className="aboutsensor">
                            <div className="aboutimgs">
                                <img src="./img/status.png" alt="img"/>
                            </div>
                            <div className="abouttitles">
                                <h3>Check Home Status</h3>
                                <p>Via mobile and web applications user can see the status of home which includes humidity and temprature, lights and door status.</p>
                            </div>
                        </div>
                        
                        <div className="aboutsensor">
                            <div className="abouttitles">
                                <h3>Security</h3>
                                <p>Smart home system will ensure you security. Gas and motion sensors will send a notification if there is an issue. Thanks to this system you can
                                    protect your home from gas leaks or burglars.</p>
                            </div>
                            <div className="aboutimgs">
                                <img src="./img/security.png" alt="img"/>
                            </div>
                        </div>

                        <div className="aboutsensor">
                            <div className="aboutimgs">
                                <img src="./img/support.png" alt="img"/>
                            </div>
                            <div className="abouttitles">
                                <h3>Assistant Support</h3>
                                <p>User can listen status of home via mobile application. It also supports multiple languages which are: English, Turkish and Russian</p>
                            </div>
                        </div>
                    </div>

                    <div className="howitworks">
                        <h1>How it Works</h1>
                        <p>The server on Raspberry Pi will receive the data from sensors such as air Temperature,air Humidity,
                        Gas Leakage Detection,Lightning Status(on/off),Door Status(opened/closed). The current data will be processed to show the home status.  
                        After data from sensors is  received and processed, data will be sent to web and mobile applications. Sensor data will be updated every second on both web and mobile interfaces
                        and there will be buttons. In case of possible fire, smoke, gas leakage or door opening/closing user will receive a notification.
                        User will be able to check current home status via mobile application or web site.Controlling lightning and door will be provided via mobile application or web site.
                        There will be a mobile assistant  that will provide controlling smart home by voice. Assistant has to understand users directives and give a suitable response to it. 
                        </p>
                        <div className="howitworksimgs">
                            <img src="./img/howitworks1.png" alt="img"/>
                            <img src="./img/howitworks2.png" alt="img"/>
                        </div>
                    </div>

                    <div className="requirements">
                    <h1>Non-Functional Requirements</h1>
                        <h3>Performance</h3>
                        <p>Despite the low specifications of Raspberry Pi, we believe that we can overcome performance issues by using modern technologies on both hardware and software sides.</p>
                        <h3>Security</h3>
                        <p>Our system is configured in a way that it prevents the system from being attacked from other sources. It can handle Dos & Ddos attacks, sql injections and other known cyberattack types. Also we are using some tools in server side to ensure that communication between server and mobile devices is secure which increases  reliability of our system.</p>
                        <h3>Maintenance</h3>
                        <p>Main technologies that  we are using in both server-side and client-side which are NodeJs and ReactJs have component based structure that makes implementation and debugging much more easier and faster which means system will be easily maintained.</p>
                        <h3>Scalability</h3>
                        <p>Because all system processes are running on Raspberry Pi, there might be power issues like overheating. But we found out that there are some cooling techniques to avoid overheating issues.</p>
                        <h3>Usability</h3>
                        <p>User can check and control the sensor statuses via both web and mobile applications remotely..User interface of our Web and Mobile applications are designed by using most suggested UI/UX techniques in order to make usability of the application more user-friendly</p>
                    </div>
                </section>
            </Auxiliary>
        )
    }
}

export default NotFound;