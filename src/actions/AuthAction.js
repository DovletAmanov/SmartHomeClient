import {
    GARAGE_STATUS_CHANGED,
    HEAT_DATA_STATUS,
    MOTION_DATA_STATUS,
    LIGHT_DATA_STATUS,
    GAS_DATA_STATUS,
    RAIN_DATA
} from './types';

export const sthHappened = text => {
    return{
        type: 'sthHappened',
        payload: text
    }
}