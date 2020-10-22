import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';


import { THEME } from '../../theme'

const theme = THEME.Android

export default TrainingProgram = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Програама тренировок</Text>
            </View>
        </View>

        //<Button title='go to Tasks' onPress={() => navigatePage(navigation, pages.Tasks)}></Button>
    );
}

TrainingProgram.navigationOptions = {
    headerTitle: 'TrainingProgram'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.MAIN_COLOR,
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 10,
        justifyContent: 'flex-start'
    },
    content: {
        backgroundColor: theme.WHITE,
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 10,
        width: '96%',
        flex: 1,
    },
    title: {
        fontSize: 21,
        color: theme.MAIN_COLOR,
        fontWeight: 'bold'
    }
});
