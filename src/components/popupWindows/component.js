import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput, Image } from 'react-native';
import { Feather, Fontisto, AntDesign, Ionicons } from '@expo/vector-icons';

import { pages, navigatePage } from '../../navigation/NavigationsRouteFunctions'
import { THEME } from '../../theme'
import { PopupContext } from '../../reducers/PopupReducer'

const theme = THEME.Android

export const popupWindowsList = {
    tutorialWindow: "TUTORIAL_WINDOW",
    profileEditWindow: "PROFILE_EDIT_WINDOW",
    supportWindow: "SUPPORT_WINDOW",
}

export const PopupWindowTemplate = ({children, functions}) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(27, 27, 27, 0.4)',
            opacity: 1,
        },
        window: {
            position: 'relative',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '80%',
            borderRadius: 10,
            minHeight: 280,
            backgroundColor: theme.WHITE
        }
    });    

    return (
        <TouchableOpacity style={styles.container} onPress={() => functions.f0()}>
            <TouchableHighlight style={styles.window}>
                { children }
            </TouchableHighlight >
        </TouchableOpacity>
    )
}


export const ProfileEditWindow = ({functions, image, form}) => {
    const styles = StyleSheet.create({
        windowTitle: {
            margin: 10,
            color: theme.MAIN_COLOR,
            fontWeight: 'bold',
            fontSize: 19
        },
        imgContainer: {
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            width: 140,
            height: 140,
            borderRadius: 25,
            backgroundColor: theme.LIGHT_GRAY
        },
        submitButton: {
            backgroundColor: theme.MAIN_COLOR,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            margin: 10 
        },
        imgContainerText: {
            fontSize: 17,
            fontWeight: 'bold',
            color: theme.GRAY
        },
        input: {
            margin: 0,
            paddingHorizontal: 5,
            width: '80%',
            borderBottomColor: theme.GRAY,
            borderBottomWidth: 1
        },
        xIconContainer: {
            position: 'absolute',
            top: 5,
            right: 5
        },
        hr: {
            width: '98%',
            height: 1,
            backgroundColor: theme.GRAY,
        }
    })
    
    return (
        <>
            <Text style={styles.windowTitle}>Изменить профиль</Text>
            <View style={styles.hr}></View>
            <TouchableOpacity style={styles.imgContainer} onPress={() => functions.f1()}>
                {
                    image != null ? <Image source={{ uri: image }} style={{ width: 140, height: 140 }} /> : 
                    <>
                        <Feather name="plus" size={24} color={theme.GRAY} />
                        <Text style={styles.imgContainerText}>Загрузить</Text>
                    </>
                }
            </TouchableOpacity>
            <TextInput style = {styles.input}
                underlineColorAndroid = 'transparent'
                placeholder = "Имя"
                placeholderTextColor = {theme.GRAY}
                autoCapitalize = "none"
            />
            <TouchableOpacity style={styles.submitButton} onPress={() => form.submit()}>
                <Text style={{color:theme.WHITE, fontWeight: 'bold'}}>Обновить</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.xIconContainer} onPress={() => functions.f0()}>
                <Feather name="x" size={24} color={theme.GRAY} />
            </TouchableOpacity>
        </>
    );
}

export const TutorialWindow = () => {
    const styles = StyleSheet.create({
        windowTitle: {
            margin: 10,
            color: theme.MAIN_COLOR,
            fontWeight: 'bold',
            fontSize: 19
        },
        submitButton: {
            backgroundColor: theme.MAIN_COLOR,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            margin: 10 
        },
        imgContainerText: {
            fontSize: 17,
            fontWeight: 'bold',
            color: theme.GRAY
        },
        input: {
            marginVertical: 3,
            paddingHorizontal: 5,
            width: '80%',
            borderBottomColor: theme.GRAY,
            borderBottomWidth: 1
        },
        xIconContainer: {
            position: 'absolute',
            top: 5,
            right: 5
        },
        hr: {
            width: '98%',
            height: 1,
            backgroundColor: theme.GRAY,
        }
    })    
    
    return (
        <>
            <Text>Tutorial Window</Text>       
        </>
    );
}

export const SupportWindow = ({state, dispatch}) => {
    const styles = StyleSheet.create({
        windowTitle: {
            margin: 10,
            color: theme.MAIN_COLOR,
            fontWeight: 'bold',
            fontSize: 19
        },
        imgContainer: {
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            width: 140,
            height: 140,
            borderRadius: 25,
            backgroundColor: theme.LIGHT_GRAY
        },
        submitButton: {
            backgroundColor: theme.MAIN_COLOR,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            margin: 10 
        },
        imgContainerText: {
            fontSize: 17,
            fontWeight: 'bold',
            color: theme.GRAY
        },
        input: {
            margin: 0,
            paddingHorizontal: 5,
            width: '80%',
            borderBottomColor: theme.GRAY,
            borderBottomWidth: 1
        },
        xIconContainer: {
            position: 'absolute',
            top: 5,
            right: 5
        },
        hr: {
            width: '98%',
            height: 1,
            backgroundColor: theme.GRAY,
        }
    })    
    
    return (
        <>
            <Text style={styles.windowTitle}>Связаться с нами</Text>
            <View style={styles.hr}></View>
            <TextInput style = {styles.input}
                underlineColorAndroid = 'transparent'
                placeholder = "Имя"
                placeholderTextColor = {theme.GRAY}
                autoCapitalize = "none"
            />
            <TextInput style = {styles.input}
                underlineColorAndroid = 'transparent'
                placeholder = "Эл.Адрес"
                placeholderTextColor = {theme.GRAY}
                autoCapitalize = "none"
            />
            <TextInput style = {styles.input}
                underlineColorAndroid = 'transparent'
                placeholder = "Сообшение"
                placeholderTextColor = {theme.GRAY}
                autoCapitalize = "none"
            />
            <TouchableOpacity style={styles.submitButton}>
                <Text style={{color:theme.WHITE, fontWeight: 'bold'}}>Отправить письмо</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.xIconContainer} onPress={() => functions.f0()}>
                <Feather name="x" size={24} color={theme.GRAY} />
            </TouchableOpacity>        
        </>
    );
}