import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { pages, navigatePage, setNavigationVariable } from '../navigation/NavigationsRouteFunctions'

export default TrainingMain = ({navigation}) => {
    return (
        <View style={styles.container}>
        </View>
    );
}

TrainingMain.navigationOptions = {
    headerTitle: 'Training'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


