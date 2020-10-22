import React, { useReducer, createContext } from "react";

export const MenuContext = createContext();

const initialState = {
  isHidden: true
};

const reducer = (state, action) => {
    switch(action.type){
        case 'toggler':
          var newState = {...state}
          newState.isHidden = !newState.isHidden
          return newState
          
        default:
          return state
    }
}

export const MenuContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MenuContext.Provider value={[state, dispatch]}>
      {props.children}
    </MenuContext.Provider>
  );
};