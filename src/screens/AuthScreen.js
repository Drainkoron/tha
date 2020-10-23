import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useContext } from 'react';

import { THEME } from '../theme'
import { Container } from '../components/authScreen/container'
import { UserDataContext } from '../reducers/UserDataReducer'
import { AppNavigation, AuthNavigation } from '../navigation/AppNavigation'
import { endpoints } from '../requests/constants'
import { getReq, postReq } from '../requests/request'
import { Preloader } from '../components/preloader'

const bgImage = require('../../assets/icons/AuthBackgroundImage.png')
const googleIcon = require('../../assets/icons/googleIcon.png')
const facebookIcon = require('../../assets/icons/facebookIcon.png')
const appleIcon = require('../../assets/icons/appleIcon.png')

const theme = THEME.Android

export const AuthScreen = () => {
    const [stateUD, dispatchUD] = useContext(UserDataContext)

    if(stateUD.access == null){
        return <Container />
    }
    
    else {
        getReq(endpoints.get_personal_data, stateUD.access).then(data => {
            dispatchUD({type:'setProfileData', payload:data})
        }, error => {
            console.log(error)
        })

        if(stateUD.profileData != null)
            return <AppNavigation />
        return <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%', backgroundColor: theme.GRAY}}><Preloader /></View>
    }
}
