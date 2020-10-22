import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Image } from 'react-native';
import { Feather, Fontisto, AntDesign, Ionicons } from '@expo/vector-icons';

import { pages, navigatePage } from '../../../navigation/NavigationsRouteFunctions'
import { THEME } from '../../../theme'
import { ProfileContext } from '../../../reducers/ProfileReducer'
import { PopupContext } from '../../../reducers/PopupReducer'
import { MenuContext } from '../../../reducers/MenuReducer'

const theme = THEME.Android

const MoreContent = ({state, heigthAnim}) => {
    return ( 
        <Animated.View style={{overflow: 'hidden', height: heigthAnim}}>
            <View style={styles.moreContentContainer}>
                <Text>Trainer</Text>
            </View>
        </Animated.View>
    )
}

export const ProfileCard = ({state, userData, heigthAnim, functions}) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.imgContainer}>
                    { userData.profile_image ? <Image source={{ uri: userData.profile_image }} style={{ width: 140, height: 140 }} /> : null }
                </View>
                <View style={styles.arrowIconContainer}>
                    <Fontisto name="arrow-return-right" size={24} color={theme.MAIN_COLOR} />
                </View>
                <TouchableOpacity style={styles.menuIconContainer} onPress={() => functions.f0()}>
                    <Feather name="menu" size={24} color={theme.MAIN_COLOR} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.questionIconContainer} onPress={() => functions.f1()}>
                    <AntDesign name="questioncircle" size={24} color={theme.MAIN_COLOR} />
                </TouchableOpacity>
                <Text style={styles.userName}>
                    {`${userData.first_name} ${userData.last_name}`}
                </Text>
                <TouchableOpacity style={styles.editButton} onPress={() => functions.f2()}>
                    <Text style={{color: theme.GRAY}}>Изменить</Text>
                </TouchableOpacity>
                <View style={styles.hr}/>
            </View>
            <View style={styles.trainerContainer}>
                <Text style={styles.trainerContainerTitle}>
                    Мой тренер
                </Text>
                <TouchableOpacity style={styles.moreContentArrowContainer} onPress={() => functions.f3()}> 
                    <Ionicons name={`ios-arrow-${state.trainerContainer.arrowMode}`} size={24} color={theme.GRAY} />
                </TouchableOpacity>
            </View>
            <MoreContent state={state.trainerContainer} heigthAnim={heigthAnim}></MoreContent>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '96%',
    },
    profileContainer: {
        position: 'relative',
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgContainer: {
        overflow: 'hidden',
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: theme.GRAY
    },
    arrowIconContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    menuIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    questionIconContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    userName: {
        marginTop: 15,
        color: theme.MAIN_COLOR,
        fontWeight: 'bold',
        fontSize: 24
    },
    editButton: {
        marginBottom: 5,
        fontSize: 13,
    },
    trainerContainer: {
        marginVertical: 15,
        paddingHorizontal: 10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    trainerContainerTitle: {
        color: theme.MAIN_COLOR,
        fontWeight: 'bold',
        fontSize: 17
    },
    moreContentContainer: {
        width: '100%',
        minHeight: 40,
        paddingHorizontal: 10,
        marginBottom: 5
    },
    moreContentArrowContainer: {
        padding: 3,
        color: theme.GRAY,
    },
    hr: {
        width: '98%',
        height: 1,
        backgroundColor: theme.GRAY,
    }

});