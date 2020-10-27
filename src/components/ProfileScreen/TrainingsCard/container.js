import React, { useState, useContext } from 'react';

import { TrainingsCard } from './component';
import { TrainingsContext } from '../../../reducers/TrainingsReducer'
import { UserDataContext } from '../../../reducers/UserDataReducer'
import { PopupContext } from '../../../reducers/PopupReducer'
import { popupWindowsList } from '../../popupWindows/container'

export const TrainingsCardC = ({Date, navigation}) => {
    const [state, dispatch] = useContext(TrainingsContext);
    const [stateUD, dispatchUD] = useContext(UserDataContext);
    const [popupState, popupDispatch] = useContext(PopupContext);

    const props = {
        state,
        Date,
        navigation,
        userData: {
            first_name: stateUD.profileData.first_name,
            last_name: stateUD.profileData.last_name,
            profile_image: stateUD.profileData.profile_image,
            is_coach: stateUD.profileData.is_coach
        },
        functions: {
            f0: (index) => dispatch({type:'setsItemModeToggler', setsItemIndex:index, activeElementIndex: state.activeElementIndex}),
            f1: (index) => dispatch({type:'changeActiveElement', payload: index}),
            f2: () => popupDispatch({type:'toggler', window:popupWindowsList.createTrainingsWindow}),
        }
    }
    
    return (
        <TrainingsCard {...props}/>       
    );

}
