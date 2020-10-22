import React, { useReducer, createContext } from "react";

export const NavigationContext = createContext();

const initialState = {
    navigation: null
};
  
const reducer = (state, action) => {
    switch(action.type){
        case 'setNavigation':
            var newState = {...state}
            newState.navigation = action.payload
            return newState
            
        default:
            return state
    }
}
  
export const NavigationContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
        <NavigationContext.Provider value={[state, dispatch]}>
            {props.children}
        </NavigationContext.Provider>
    );
};