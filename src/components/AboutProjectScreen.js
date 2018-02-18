import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';

class AboutProjectScreen extends Component{

    render(){
        return(

            <Auxiliary>
                <section id="boxes">
                    <div className="container">
                        <div className="box">
                        <img src="./img/celsius.png"/>
                        <h3>Heat & Humidity Information</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                        </div>
                        <div className="box">
                        <img src="./img/garage.png"/>
                        <h3>Autonomous Garage Door</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                        </div>
                        <div className="box">
                        <img src="./img/umbrella.png"/>
                        <h3>Avoiding Dangerous Gas</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                        </div>
                    </div>
                </section>
            </Auxiliary>

        )
    }
}

export default AboutProjectScreen;