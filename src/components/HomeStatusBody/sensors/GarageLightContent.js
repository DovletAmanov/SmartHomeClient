import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class GarageLightContent extends Component{


    render(){

        let { garageLightStatus, handleSensorButton } = this.props;

        return(
            <Auxiliary>
                <div className="sensordata">
                    <h1>Garage Light Status</h1>
                    {
                       garageLightStatus 
                        ?
                        <div>
                            <img src="./img/lighton.png"/>
                            <p>Light is ON</p>
                            <button 
                                className="sensorButtons"
                                onClick={() => handleSensorButton("garageLight")}
                            >
                            Switch OFF the light
                            </button>
                        </div>
                        :
                        <div>
                            <img src="./img/lightoff.png"/>
                            <p>Light is OFF</p>
                            <button 
                                className="sensorButtons"
                                onClick={() => handleSensorButton("garageLight")}
                            >
                            Switch ON the light
                            </button>
                        </div>
                    }
                </div>
            </Auxiliary>
        )
    }
}

export default GarageLightContent;