import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Feather, Fontisto, AntDesign, Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';

import { pages, navigatePage } from '../../navigation/NavigationsRouteFunctions'
import { THEME } from '../../theme'

const theme = THEME.Android

const Input = () => {
    const [inputText, setInputText] = useState('')

    const styles = StyleSheet.create({
        inputSection: {
            marginVertical: 10,
            paddingHorizontal: 10,
            height: 38,
            flex: 1,
            backgroundColor: theme.LIGHT_GRAY,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
        },
        input: {
            flex: 1
        },
    })
    
    return (
        <View style={styles.inputSection}>
            <TextInput
                style={styles.input}
                placeholder="Текст сообщения"
                onChangeText={(text) => {setInputText(text)}}
                defaultValue={inputText}
                underlineColorAndroid="transparent"
            />
        </View>
    )
}

const Header = ({navigation}) => {
    const styles = {
        header: {
            width: '100%',
            paddingVertical: 15,
            paddingHorizontal: 15,
            borderBottomColor: theme.GRAY,
            borderBottomWidth: 2,
        },
        headerMain: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        userNameText: {
            fontSize: 21,
            color: theme.MAIN_COLOR,
            fontWeight: '500'
        },
        userImageContainer: {
            height: 36,
            width: 36,
            borderRadius: 18,
            backgroundColor: theme.GRAY
        },
        userOnlineStatus: {
            color: theme.GRAY
        },
        backArrow: {
            padding: 5
        }
    }
    
    return (
        <View style={styles.header}>
            <View style={styles.headerMain}>
                <TouchableOpacity style={styles.backArrow} onPress={() => navigation.pop()}>
                    <Ionicons name="ios-arrow-back" size={28} color={theme.MAIN_COLOR} />
                </TouchableOpacity>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.userNameText}>Алексей Иванов</Text>
                    <Text style={styles.userOnlineStatus}>В сети</Text>
                </View>
                <View style={styles.userImageContainer}></View>
            </View>
        </View>
    )
}

const Messages = () => {
    const styles = {
        container: {
            flex: 1,
            width: '100%',
            backgroundColor: theme.LIGHT_GRAY
        }
    }
    
    return (
        <View style={styles.container}>
            
        </View>
    )
}

const ComunicationItems = () => {
    const styles = {
        container: {
            width: '100%',
            flexDirection: 'row', 
            alignItems: 'center',
            paddingHorizontal: 10 
        },
        icons: {
            color: theme.MAIN_COLOR,
            padding: 8
        }
    }
    
    return (
        <View style={styles.container}>
            <Entypo style={styles.icons} name="camera" size={38}/>
            <FontAwesome5 style={styles.icons} name="image" size={38}/>
            <Input />
            <Feather style={styles.icons} name="arrow-up-circle" size={38}/>
        </View>
    )
}

export const ConversationComponent = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Header navigation={navigation}/>
                <Messages />
                <ComunicationItems />       
            </View>
        </View>
    );
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
        overflow: 'hidden',
        backgroundColor: theme.WHITE,
        paddingVertical: 0,
        alignItems: 'center',
        borderRadius: 10,
        width: '96%',
        flex: 1,
    },
});