import React, { useReducer, createContext } from "react";

export const PopupContext = createContext();

const initialState = {
  CreateTrainingsWindow: {
    content: {
      athletes: [
        {is_active: false},
        {is_active: false},
        {is_active: false},
        {is_active: false},
        {is_active: false},
        {is_active: false},
        {is_active: false},
      ],
      groups: [
        {is_active: false},
        {is_active: false},
        {is_active: false},
        {is_active: false},
      ]
    }
  },
  isHidden: true,
  popupWindow: 'ProfileEditWindow'
};

const reducer = (state, action) => {
    switch(action.type){
        case 'toggler':
          var newState = {...state}
          newState.isHidden ? (
            newState.isHidden = false,
            newState.popupWindow = action.window
          ) : (
            newState.isHidden = true,
            newState.popupWindow = null
          )
          return newState
        
        case 'setActiveItem':
          var newState = {...state}
          newState.CreateTrainingsWindow.content[action.alternative][action.payload].is_active = !newState.CreateTrainingsWindow.content[action.alternative][action.payload].is_active
          return newState
          
        default:
          return state
    }
}

export const PopupContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PopupContext.Provider value={[state, dispatch]}>
      {props.children}
    </PopupContext.Provider>
  );
};