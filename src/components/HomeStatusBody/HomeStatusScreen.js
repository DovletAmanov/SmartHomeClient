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
import GardenLightContent from './sensors/GardenLightContent';


const LOADING_TEXT = 'Fetching Data...';
const endpoint = "http://192.168.1.109:8888";
const socket = socketIOClient(endpoint);  

class HomeStatusScreen extends Component{
  
    constructor() {
        super();
        this.state = {
          temperature: '',
          humidity: '',
          gasStatus: LOADING_TEXT,
          garageStatus: false,
          rainStatus: LOADING_TEXT,
          motionStatus: LOADING_TEXT,
          kitchenLightStatus: false,
          livingRoomLightStatus: false,
          garageLightStatus: false,
          gardenLightStatus: false,
          lightStatus: LOADING_TEXT,
          isLoggedIn: true
        };
      }

      componentDidMount() {
        socket.on("sendingsensordata", data => this.setState({ 
          temperature: data.temperature,
          humidity: data.humidity,
          motionStatus: data.motionStatus,
          lightStatus: data.lightStatus,
          rainStatus: data.rainStatus,
          gasStatus: data.gasStatus,
          garageStatus: data.garageStatus,
          kitchenLightStatus: data.kitchenLightStatus,
          livingRoomLightStatus: data.livingRoomLightStatus,
          garageLightStatus: data.garageLightStatus,
          gardenLightStatus: data.gardenLightStatus 
        }));
      }

    // Handling clicks from sensors & emitting socket event with data

    _handleSensorButton = input =>{

      switch(input){

        case "garageDoor":
            this.setState({
              garageStatus: !this.state.garageStatus
            }, () => {
              socket.emit('garageDoorEvent',{ garageData: this.state.garageStatus });
            });
            break;
        
        case "livingRoomLight":
            this.setState({
              livingRoomLightStatus: !this.state.livingRoomLightStatus
            }, () => {
              socket.emit('livingRoomLightEvent',{ livingRoomLightData: this.state.livingRoomLightStatus });
            });
            break;
        
        case "kitchenLight":
            this.setState({
              kitchenLightStatus: !this.state.kitchenLightStatus
            }, () => {
              socket.emit('kitchenLightEvent',{ kitchenLightData: this.state.kitchenLightStatus });
            });
            break;

        case "garageLight":
            this.setState({
              garageLightStatus: !this.state.garageLightStatus
            }, () => {
              socket.emit('garageLightEvent',{ garageLightData: this.state.garageLightStatus });
            });
            break;

        case "gardenLight":
            this.setState({
              gardenLightStatus: !this.state.gardenLightStatus
            }, () => {
              socket.emit('gardenLightEvent',{ gardenLightData: this.state.gardenLightStatus });
            });
            break;
      }
    }


    render(){
      
        let { 
          isLoggedIn,
          temperature,
          humidity,
          gasStatus, 
          garageStatus,
          rainStatus,
          lightStatus,
          motionStatus,
          kitchenLightStatus,
          garageLightStatus,
          livingRoomLightStatus,
          gardenLightStatus
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
                  temperature={ temperature }
                  humidity={ humidity }
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

              {/* Garden Light */}
              <GardenLightContent
                gardenLightStatus={ gardenLightStatus }
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