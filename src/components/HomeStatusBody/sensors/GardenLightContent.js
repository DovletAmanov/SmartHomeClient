import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class GardenLightContent extends Component{


    render(){

        let { gardenLightStatus, handleSensorButton } = this.props;

        return(
            <Auxiliary>
                <div className="sensordata">
                    <h1>Garden Light Status</h1>
                    {
                       gardenLightStatus 
                        ?
                        <div>
                            <img src="./img/lighton.png"/>
                            <p>Light is ON</p>
                            <button 
                                className="sensorButtons"
                                onClick={() => handleSensorButton("gardenLight")}
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
                                onClick={() => handleSensorButton("gardenLight")}
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

export default GardenLightContent;