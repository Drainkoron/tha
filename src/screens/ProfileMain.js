import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';

import { pages, navigatePage, setNavigationVariable } from '../navigation/NavigationsRouteFunctions'
import { ProfileCardC } from '../components/ProfileScreen/profileCard/container'
import { TrainingsCardC } from '../components/ProfileScreen/TrainingsCard/container'
import { ProfileEditWindowC } from '../components/popupWindows/container'
import { THEME } from '../theme'
import { NavigationContext } from '../context/navigationsContext'

const theme = THEME.Android

export default ProfileMain = ({navigation}) => {
    setNavigationVariable(navigation)

    return (
        <View style={styles.container}>
            <ProfileCardC navigation={navigation} />
            <TrainingsCardC style={{flex: 1}} Date={{year:'2020', month:'Октябрь'}} navigation={navigation} />
        </View>
    );
}

ProfileMain.navigationOptions = {
    headerTitle: 'Profile'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.MAIN_COLOR,
        alignItems: 'center',
        paddingTop: 40,
        justifyContent: 'flex-start',
    },
});


