import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { THEME } from '../../theme'
import { ConversationComponent } from '../../components/messageScreen/Conversation'

const theme = THEME.Android

export default Conversation = ({navigation}) => {
    return (
        <ConversationComponent navigation={navigation}></ConversationComponent>
        //<Button title='go to Tasks' onPress={() => navigatePage(navigation, pages.Tasks)}></Button>
    );
}

Conversation.navigationOptions = {
    headerTitle: 'Conversation'
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
