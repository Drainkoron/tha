import React, { useReducer, createContext } from "react";

export const UserDataContext = createContext();

const initialState = {
    access: null,
    profileData: null,
    page: 'auth',
    registrationData: null,
    recoveryData: null
};

const reducer = (state, action) => {
    switch(action.type){
        case 'setAccessKey':
          var newState = {...state}
          newState.access = action.payload
          return newState

        case 'setProfileImg':
          var newState = {...state}
          newState.profileData.profile_image = action.payload
          return newState
        
        case 'setProfileData':
          var newState = {...state}
          newState.profileData = action.payload
          return newState
          
        case 'setPage':
          var newState = {...state}
          newState.page = action.payload
          return newState
          
        case 'setUserType':
          var newState = {...state}
          newState.registrationData = {is_coach: action.payload}
          return newState

        case 'setRegistrationData':
          var newState = {...state}
          newState.registrationData = {...newState.registrationData , ...action.payload} 
          return newState

        case 'setRecoveryEmail':
          var newState = {...state}
          newState.recoveryData = {email: action.payload}
          return newState
  
        case 'setRecoveryData':
          var newState = {...state}
          newState.recoveryData = {...newState.recoveryData , ...action.payload} 
          return newState

        default:
            return state
    }
}

export const UserDataContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserDataContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserDataContext.Provider>
  );
};