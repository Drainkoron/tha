import React, { useState, useContext, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

import { pages, navigatePage } from '../../../navigation/NavigationsRouteFunctions'
import { ProfileCard } from './component'
import { ProfileContext } from '../../../reducers/ProfileReducer'
import { PopupContext } from '../../../reducers/PopupReducer'
import { MenuContext } from '../../../reducers/MenuReducer'
import { UserDataContext } from '../../../reducers/UserDataReducer'
import { popupWindowsList } from '../../popupWindows/container'

export const ProfileCardC = ({navigation}) => {
    const [state, dispatch] = useContext(ProfileContext);
    const [popupState, popupDispatch] = useContext(PopupContext);
    const [menuState, menuDispatch] = useContext(MenuContext);
    const [stateUD, dispatchUD] = useContext(UserDataContext);
    const [heigthAnim] = useState(new Animated.Value(0))

    const open = () => {
        Animated.timing(
            heigthAnim, {
                toValue: 40,
                duration: 300,
                useNativeDriver: false
            }
        ).start()
    }

    const close = () => {
        Animated.timing(
            heigthAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }
        ).start()
    }

    const props = {
        state: state,
        heigthAnim,
        userData: {
            first_name: stateUD.profileData.first_name,
            last_name: stateUD.profileData.last_name,
            profile_image: stateUD.profileData.profile_image
        },
        functions: {
            f0: () => menuDispatch({type:'toggler'}),
            f1: () => popupDispatch({type:'toggler', window:popupWindowsList.tutorialWindow}),
            f2: () => popupDispatch({type:'toggler', window:popupWindowsList.profileEditWindow}),
            f3: () => {dispatch({type:'toggler'}), state.trainerContainer.isHidden ? open() : close()},
        }
    }

    return (
        <ProfileCard {...props}/>       
    );
}