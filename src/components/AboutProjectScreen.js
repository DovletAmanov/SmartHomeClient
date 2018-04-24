import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';

class AboutProjectScreen extends Component{

    render(){
        return(

            <Auxiliary>

                <section id="welcoming">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                        </div>
                        <div className="box">
                        <img src="./img/security.png" alt="img"/>
                        <h3>Security</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                        </div>
                        <div className="box">
                        <img src="./img/support.png" alt="img"/>
                        <h3>Assistant Support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
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