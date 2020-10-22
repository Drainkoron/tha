import React, { useReducer, createContext } from "react";

export const PopupContext = createContext();

const initialState = {
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