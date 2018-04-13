import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SensorsReducer from './SensorsReducer';

export default combineReducers({
    auth: AuthReducer,
    sensors: SensorsReducer
})