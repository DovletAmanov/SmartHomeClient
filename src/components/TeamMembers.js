import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';

class TeamMembers extends Component{

    render(){
        return(

            <Auxiliary>
                <section id="boxes">
                    <h1>Team Members</h1>
                    <div className="container">
                        <div className="box">
                        <img src="./img/dovik.png" alt="img"/>
                        <h3>Dovlet Amanov</h3>
                        <p>IoT Developer</p>
                        </div>
                        <div className="box">
                        <img src="./img/anton.png" alt="img"/>
                        <h3>Anton Olkhovskiy</h3>
                        <p>Web Developer</p>
                        </div>
                        <div className="box">
                        <img src="./img/belemir.png" alt="img"/>
                        <h3>Belemir Çilingir</h3>
                        <p>Mobile Developer</p>
                        </div>
                    </div>
                </section>
            </Auxiliary>

        )
    }
}

export default TeamMembers;