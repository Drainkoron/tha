import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { Feather, Fontisto, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

import { pages, navigatePage } from '../../../navigation/NavigationsRouteFunctions'
import { THEME } from '../../../theme'

const theme = THEME.Android

const SetsContent = ({state, functions}) => {
    const shownContentIndex = state.content[state.activeElementIndex].shownContentIndex

    if(state.content[state.activeElementIndex].isEmpty) 
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Empty</Text>
            </View>
        )
    
    return (
        <View style={styles.setsContentConteiner}>
            {
                state.content[state.activeElementIndex].setOfExercises.map((item, index) => {
                    return (
                        <View key={index} style={styles.setsItem}>
                            <TouchableOpacity onPress={() => functions.f0(index)}>
                                <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                    <View style={{alignItems:'center', flexDirection: 'row'}}>
                                        
                                            <Ionicons name={`ios-arrow-${shownContentIndex == index ? 'down' : 'forward'}`} size={18} color={theme.GRAY} />
                                        
                                        <Text style={styles.setsItemText}>{`${index + 1}. ${item.header}`}</Text>
                                    </View>
                                    <Text style={styles.repeatsText}>{`${item.repeats} повторений`}</Text>
                                </View>
                                <View style={{...styles.hr, width: '100%', height: 2, backgroundColor:theme.MAIN_COLOR}}></View>
                            </TouchableOpacity>
                            {
                                shownContentIndex == index ? <View style={styles.setsItemContent}>

                                </View> : null
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}

const DaysListContainer = ({state, functions}) => {
    
    return (
        <View style={styles.daysListContainer}>
            {state.Days.map((item, index) => {
                var bgColor = '', buttonTextColor = '', borderColor = ''
                index == 3 ? borderColor = 'red' : borderColor = theme.MAIN_COLOR 
                index == state.activeElementIndex ? (bgColor = borderColor, buttonTextColor = theme.WHITE) : (bgColor = 'transparent', buttonTextColor = borderColor)

                return(
                    <View key={index} style={styles.daysContainer}> 
                        <View style={styles.dayLabels}>
                            <Text style={{...styles.daysLabelText, color: borderColor}}>
                                {item.str}
                            </Text>
                        </View>
                        <TouchableOpacity styles={styles.daysContainer} onPress={() => functions.f1(index)}>
                            <View style={{...styles.dayButtons, borderColor: borderColor, backgroundColor: bgColor}}>
                                <Text style={{...styles.daysText, color: buttonTextColor}}>
                                    {item.num}
                                </Text>
                            </View>
                        </TouchableOpacity>             
                    </View>
                ) 
            })}
        </View>        
    )
}

const AthleteContent = ({Date, state, functions}) => {
    return (
        <>
            <View style={styles.monthContainer}>
                <TouchableOpacity >
                    <Ionicons name="ios-arrow-back" size={24} color={theme.GRAY} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.monthText}>
                        {`${Date.month} ${Date.year}`}
                    </Text>
                </TouchableOpacity>    
                <TouchableOpacity >
                    <Ionicons name="ios-arrow-forward" size={24} color={theme.GRAY} />
                </TouchableOpacity>
            </View>   
            <DaysListContainer
                state={state}
                functions={functions}
            ></DaysListContainer>    
            <View style={styles.hr}/>
            <SetsContent
                state={state}
                functions={functions}
            ></SetsContent>
        </>
    )
}

const TrainerContent = ({Date, state, functions}) => {
    const styles = {
        icon: {
            color: theme.MAIN_COLOR,
            fontSize: 45,
            margin: 50,
        },
        title: {
            color: theme.MAIN_COLOR,
            fontSize: 25
        },
        container: {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Написать программу</Text>
            <TouchableOpacity onPress={() => functions.f2()}>
                <AntDesign name="pluscircle" size={24} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export const TrainingsCard = ({userData, Date, navigation, state, functions}) => {
    const props = {
        Date,
        state,
        functions
    }
    
    return (
        <View style={styles.container}>
            {
                userData.is_coatch ? 
                    <AthleteContent {...props}/> :
                    <TrainerContent {...props}/>
            }
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.WHITE,
        margin: 10,
        borderRadius: 10,
        width: '96%',
        alignItems: 'center'
    },
    profileContainer: {
        position: 'relative',
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    trainerContainer: {
        padding: 10
    },
    dayButtons: {
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        height: 20,
        width: 40,
        borderColor: theme.MAIN_COLOR
    },
    daysListContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        width: '100%',
    },
    daysContainer: {
        alignItems: 'center'
    },
    daysText: {
        color: theme.MAIN_COLOR,
        fontWeight: 'bold',
    },
    imgContainer: {
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
        fontWeight: '500',
        fontSize: 24
    },
    monthContainer: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    monthText: {
        marginHorizontal: 10,
        fontSize: 14,
        fontWeight: '500',
        color: theme.GRAY
    },
    setsContentConteiner: {
        width: '100%',
        padding: 10,
    },
    setsItemContent: {
        height: 80,
        backgroundColor: theme.GRAY,
    },
    setsItem: {
        minHeight: 40,
        width: '100%',
        marginBottom: 5,
    },
    setsItemText: {
        marginHorizontal: 5,
        color: theme.GRAY,
        fontSize: 17,
        fontWeight: 'bold'
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyText: {
        padding: 20,
        color: theme.MAIN_COLOR,
        fontSize: 21,
        fontWeight: 'bold'
    },
    repeatsText: {
        color: theme.MAIN_COLOR,
        fontSize: 13,
        fontWeight: 'bold'
    },
    trainerContainer: {
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    trainerContainerTitle: {
        color: theme.MAIN_COLOR,
        fontWeight: '500',
        fontSize: 17
    },
    moreContentArrowContainer: {
        color: theme.GRAY,
    },
    hr: {
        width: '98%',
        height: 1,
        backgroundColor: theme.GRAY,
    }
});