import React,{Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class HeatSensorContent extends Component{


    render(){
        let { temperature, humidity } = this.props;
        return(
            <Auxiliary>
                 <div className="heatdata">
                    <h1>Heat & Humidity Status</h1>
                    <img src="./img/temperature.png"/>
                    <div style={{ textAlign: "center" }}>

                    {temperature
                    ? <p>
                        Temperature: {temperature} Celsius 
                        </p>
                    : <p>Loading data from heat sensor...</p>}

                    {humidity
                    ? <p>
                        Humidity: {humidity} %
                        </p>
                    : <p>Loading data from heat sensor...</p>}

                    </div>
                </div>
            </Auxiliary>
        )
    }
}

export default HeatSensorContent;