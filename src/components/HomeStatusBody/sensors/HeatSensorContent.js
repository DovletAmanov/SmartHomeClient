import React,{Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class HeatSensorContent extends Component{


    render(){
        let { dhtstatus } = this.props;
        return(
            <Auxiliary>
                 <div className="heatdata">
                    <h1>Heat & Humidity Status</h1>
                    <img src="./img/temperature.png"/>
                    <div style={{ textAlign: "center" }}>
                    <p>
                        {
                            dhtstatus
                        }
                    </p>
                    </div>
                </div>
            </Auxiliary>
        )
    }
}

export default HeatSensorContent;