import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class GarageContent extends Component{


    render(){
        return(
            <Auxiliary>
                <div className="garagedata">
                    <h1>Garage Door Status</h1>
                    <img src="./img/garage.png"/>
                    {
                        this.props.garagestatus 
                        ?
                        <div>
                            <p>Garage is Open</p>
                            <button 
                                className="sensorButtons"
                                onClick={()=> this.props.handleGarageButton()}
                            >
                            Close the Garage Door
                            </button>
                        </div>
                        :
                        <div>
                            <p>Garage is Closed</p>
                            <button 
                                className="sensorButtons"
                                onClick={()=> this.props.handleGarageButton()}
                            >
                            Open the Garage Door
                            </button>
                        </div>
                    }
                </div>
            </Auxiliary>
        )
    }
}

export default GarageContent;