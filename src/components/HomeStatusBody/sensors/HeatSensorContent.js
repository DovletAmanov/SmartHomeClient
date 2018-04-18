import React,{Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class HeatSensorContent extends Component{


    render(){
        let { temperature, humidity } = this.props;
        return(
            <Auxiliary>
                 <div className="sensordata">
                    <h1>Heat & Humidity Status</h1>
                    <img src="./img/temperature.png"/>
                    <div style={{ textAlign: "center" }}>
                    <p>
                        {
                             temperature && humidity
                             ?
                             `${temperature} Celcius / ${humidity} %`
                             :
                             `Fetching Data...`
                        }
                    </p>
                    </div>
                </div>
            </Auxiliary>
        )
    }
}

export default HeatSensorContent;