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
                        <h1>What this project is about?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        </p>
                    </div>
                    
                    <div className="aboutfeatures">
                        <div className="aboutsensor">
                            <div className="aboutimgs">
                                <img src="./img/status.png" alt="img"/>
                            </div>
                            <div className="abouttitles">
                                <h3>Check Home Status</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                            </div>
                        </div>
                        
                        <div className="aboutsensor">
                            <div className="abouttitles">
                                <h3>Security</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                            </div>
                        </div>
                    </div>

                    <div className="howitworks">
                        <h1>How it Works</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        </p>
                        <div className="howitworksimgs">
                            <img src="./img/howitworks1.png" alt="img"/>
                            <img src="./img/howitworks2.png" alt="img"/>
                        </div>
                    </div>

                    <div className="requirements">
                        <h1>Functional Requirements</h1>
                        <h3>Performance</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                        <h3>Security</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                        <h3>Maintenance</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                        <h3>Scalability</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                        <h3>Usability</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                    </div>
                </section>
            </Auxiliary>
        )
    }
}

export default NotFound;