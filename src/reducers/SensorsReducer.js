import {  
    GARAGE_STATUS_CHANGED,
    HEAT_DATA_STATUS,
    MOTION_DATA_STATUS,
    LIGHT_DATA_STATUS,
    GAS_DATA_STATUS,
    RAIN_DATA
   } from '../actions/types';


   const INITIAL_STATE = {
       garageStatus: '',
       heatStatus: '',
       motionStatus: '',
       lightStatus: '',
       gasStatus: '',
       rainStatus: ''
   }

   export default (state=INITIAL_STATE, action) => {

    switch(action.type){
        case GARAGE_STATUS_CHANGED:
            return { ...state, garageStatus: action.payload };
        
        case HEAT_DATA_STATUS:
            return { ...state, heatStatus: action.payload };
        
        case MOTION_DATA_STATUS:
            return { ...state, motionStatus: action.payload };
        
        case LIGHT_DATA_STATUS:
            return { ...state, lightStatus: action.payload };

        case GAS_DATA_STATUS:
            return { ...state, gasStatus: action.payload };

        case RAIN_DATA:
            return { ...state, rainStatus: action.payload };
            
        default:
            return state;
    }
   }