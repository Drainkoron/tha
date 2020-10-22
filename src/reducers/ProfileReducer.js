import React, { useReducer, createContext } from "react";

export const ProfileContext = createContext();

const initialState = {
  trainerContainer: {
    isHidden: true,
    content: {

    },
    arrowMode: 'down'
  }
};

const reducer = (state, action) => {
    switch(action.type){
        case 'toggler':
          var newState = {...state}
          newState.trainerContainer.isHidden = !newState.trainerContainer.isHidden
          newState.trainerContainer.arrowMode == 'up' ? newState.trainerContainer.arrowMode = 'down' : newState.trainerContainer.arrowMode = 'up' 
          return newState
          
        default:
          return state
    }
}

export const ProfileContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProfileContext.Provider value={[state, dispatch]}>
      {props.children}
    </ProfileContext.Provider>
  );
};