import React, { useReducer, createContext } from "react";

export const TrainingsContext = createContext();

const initialState = {
  Days: [
    {id:0, num:1, str:'пн'}, 
    {id:1, num:2, str:'вт'}, 
    {id:2, num:3, str:'ср'}, 
    {id:3, num:4, str:'чт'}, 
    {id:4, num:5, str:'пт'}, 
    {id:5, num:6, str:'сб'}, 
    {id:6, num:7, str:'вс'},
  ],
  content: [
    { 
      isEmpty: false,
      shownContentIndex: null,
      setOfExercises: [
        {
          header: 'DFgdFVDFv vd df',
          repeats: '13',
          content: {
            videoUrl: 'url',
          }
        },
        {
          header: 'WErwRw Ddf gd',
          repeats: '47',
          content: {
            videoUrl: 'url',
          }
        },
      ]
    },
    { 
      isEmpty: false,
      shownContentIndex: null,
      setOfExercises: [
        {
          header: 'F dfG dFgd g',
          repeats: '13',
          content: {
            videoUrl: 'url',
          }
        },
        {
          header: 'DFGD dfGD dg',
          repeats: '47',
          content: {
            videoUrl: 'url',
          }
        },
        {
          header: 'Dfs dfs dfsGdf',
          repeats: '47',
          content: {
            videoUrl: 'url',
          }
        },
      ]
    },
    { 
      isEmpty: true,
    },
    { 
      isEmpty: true,
    },
    { 
      isEmpty: true,
    },
    { 
      isEmpty: true,
    },
    { 
      isEmpty: true
    },
  ],
  activeElementIndex: 4
};

const reducer = (state, action) => {
    switch(action.type){
        case 'changeActiveElement':
          var newState = {...state}
          newState.activeElementIndex = action.payload
          return newState
        
        case 'setsItemModeToggler':
          var newState = {...state}
          newState.content[action.activeElementIndex].shownContentIndex == action.setsItemIndex ? newState.content[action.activeElementIndex].shownContentIndex = null : newState.content[action.activeElementIndex].shownContentIndex = action.setsItemIndex
          return newState
          
        default:
          return state
    }
}

export const TrainingsContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TrainingsContext.Provider value={[state, dispatch]}>
      {props.children}
    </TrainingsContext.Provider>
  );
};