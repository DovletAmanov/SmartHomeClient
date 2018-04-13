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
import GarageLightContent from './sensors/GarageLightContent';
import LivingRoomLightContent from './sensors/LivingRoomLightContent';
import KitchenLightContent from './sensors/KitchenLightContent';


const LOADING_TEXT = 'Loading Data From Sensor...';

class HomeStatusScreen extends Component{
  
    constructor() {
        super();
        this.state = {
          dhtStatus: LOADING_TEXT,
          gasStatus: LOADING_TEXT,
          garageStatus: 'Garage is Closed',
          rainStatus: LOADING_TEXT,
          motionStatus: LOADING_TEXT,
          kitchenLightStatus: LOADING_TEXT,
          livingRoomLightStatus: LOADING_TEXT,
          garageLightStatus: LOADING_TEXT,
          lightStatus: 'Loading Data From Sensor...',
          endpoint: "http://192.168.1.109:8888",
          isLoggedIn: true
        };
      }

      componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);  
        socket.on("sendingsensordata", data => this.setState({ 
          dhtStatus: data.dhtstatus,
          motionStatus: data.motionstatus,
          lightStatus: data.lightstatus,
          rainStatus: data.rainstatus,
          gasStatus: data.gasstatus 
        }));
      }

    // Handling clicks from sensors & emitting socket event with data

    _handleSensorButton = input =>{

      const { endpoint } = this.state;
      const socket = socketIOClient(endpoint);

      switch(input){

        case "garageDoor":
            this.setState({
              garageStatus: !this.state.garageStatus
            })
            socket.emit('garageDoorEvent',{ garageData: this.state.garageStatus });
            break;
        
        case "livingRoomLight":
            this.setState({
              livingRoomLightStatus: !this.state.livingRoomLightStatus
            })
            socket.emit('livingRoomLightEvent',{ livingRoomLightData: this.state.livingRoomLightStatus });
            break;
        
        case "kitchenLight":
            this.setState({
              kitchenLightStatus: !this.state.kitchenLightStatus
            })
            socket.emit('kitchenLightEvent',{ kitchenLightData: this.state.kitchenLightStatus });
            break;

        case "garageLight":
            this.setState({
              garageLightStatus: !this.state.garageLightStatus
            })
            socket.emit('garageLightEvent',{ garageLightData: this.state.garageLightStatus });
            break;
      }
    }


    render(){
      
        let { 
          isLoggedIn,
          dhtStatus,
          gasStatus, 
          garageStatus,
          rainStatus,
          lightStatus,
          motionStatus,
          kitchenLightStatus,
          garageLightStatus,
          livingRoomLightStatus,
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
                  dhtstatus={ dhtStatus }
              />

              {/* Gas Sensor */}
              <GasSensorContent 
                  gasStatus={ gasStatus }
              />  

              {/* Garage Actions */}
              <GarageContent 
                garagestatus={ garageStatus }
                handleSensorButton={ this._handleSensorButton }
              />

              {/* Rain Sensor */}
              <RainSensorContent 
                rainstatus={ rainStatus }
              />
              
              {/* Motion Sensor */}
              <MotionSensorContent 
                motionstatus={ motionStatus }
              />
              
              {/* Light Sensor */}
              <LightSensorContent 
                lightstatus={ lightStatus }
              />

              {/* Kitchen Light */}
              <KitchenLightContent 
                kitchenLightStatus={ kitchenLightStatus }
                handleSensorButton={ this._handleSensorButton}
              />

              {/* Living Room Light */}
              <LivingRoomLightContent 
                livingRoomLightStatus={ livingRoomLightStatus }
                handleSensorButton={ this._handleSensorButton }
              />

              {/* Garage Light */}
              <GarageLightContent 
                garageLightStatus={ garageLightStatus }
                handleSensorButton={ this._handleSensorButton }
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