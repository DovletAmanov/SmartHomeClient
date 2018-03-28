import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
import { Link } from 'react-router-dom';
import Auxiliary from '../hoc/Auxiliary';
import HeatSensorContent from './sensors/HeatSensorContent';
import GasSensorContent from './sensors/GasSensorContent';
import GarageContent from './sensors/GarageContent';
import LightSensorContent from './sensors/LightSensorContent';
import RainSensorContent from './sensors/RainSensorContent';
import MotionSensorContent from './sensors/MotionSensorContent';

const LOADING_TEXT = 'Loading Data From Sensor...';

class HomeStatusScreen extends Component{
  
    constructor() {
        super();
        this.state = {
          dhtstatus: LOADING_TEXT,
          gasstatus: LOADING_TEXT,
          garagestatus: 'Garage is Closed',
          rainstatus: LOADING_TEXT,
          motionstatus: LOADING_TEXT,
          lightstatus: 'Loading Data From Sensor...',
          endpoint: "http://192.168.1.109:8888",
          isLoggedIn: true
        };
      }

      componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);  
        socket.on("sendingsensordata", data => this.setState({ 
          dhtstatus: data.dhtstatus,
          motionstatus: data.motionstatus,
          lightstatus: data.lightstatus,
          rainstatus: data.rainstatus 
        }));
      }
      
    _handleGarageButton = () =>{
      const { endpoint } = this.state;
      const socket = socketIOClient(endpoint);
      this.setState({
        garagestatus: !this.state.garagestatus
      })
      socket.emit('garagedata',{ garagedata: this.state.garagestatus });
    }

    render(){
        let { 
          isLoggedIn,
          dhtstatus,
          gasstatus, 
          garagestatus,
          rainstatus,
          lightstatus,
          motionstatus
        } = this.state;
       
        return (
          <Auxiliary>

           {
            //  If user logged in, then show data from sensors
            //  Otherwise show redirect url to login page
             isLoggedIn ? 
           
          <section id="sensorblocks">

              {/* Heat & Humidity Sensor */}
              <HeatSensorContent 
                  dhtstatus={dhtstatus}
              />

              {/* Gas Sensor */}
              <GasSensorContent 
                  gasstatus={gasstatus}
              />  

              {/* Garage Actions */}
              <GarageContent 
                garagestatus={garagestatus}
                handleGarageButton={this._handleGarageButton}
              />

              {/* Rain Sensor */}
              <RainSensorContent 
                rainstatus={rainstatus}
              />
              
              {/* Motion Sensor */}
              <MotionSensorContent 
                motionstatus={motionstatus}
              />
              
              {/* Light Sensor */}
              <LightSensorContent 
                lightstatus={lightstatus}
              />
              
          </section>
          // Redirect url
          :
          <div id="signalert">
            <h1>You should Sign In first</h1>
            <button><Link to="/login">Sign In</Link></button>
          </div>
          }
          {/* Icons Author URL: http://www.iconarchive.com/artist/elegantthemes.html */}
          </Auxiliary>
        );
    }
}

export default HomeStatusScreen;