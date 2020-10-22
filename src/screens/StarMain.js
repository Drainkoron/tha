import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { pages, navigatePage, setNavigationVariable } from '../navigation/NavigationsRouteFunctions'

export default StarMain = ({navigation}) => {
    return (
        <View style={styles.container}>
        </View>

        //<Button title='go to Tasks' onPress={() => navigatePage(navigation, pages.Tasks)}></Button>
    );
}

StarMain.navigationOptions = {
    headerTitle: 'Star'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


