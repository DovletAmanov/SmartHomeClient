import {  
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL, 
    LOGIN_USER,
    EMAIL_CHANGED,
    PASSWORD_CHANGED
   } from '../actions/types';


   const INITIAL_STATE = {
       email: '',
       password: '',
       user: null,
       error: ''
   }

   export default (state=INITIAL_STATE, action) => {

    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        default:
            return state;
    }
   }