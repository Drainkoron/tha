import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput, Image, TouchableOpacityBase } from 'react-native';
import { Feather, Fontisto, AntDesign, Ionicons } from '@expo/vector-icons';

import { pages, navigatePage } from '../../navigation/NavigationsRouteFunctions'
import { THEME } from '../../theme'
import { PopupContext } from '../../reducers/PopupReducer'

const theme = THEME.Android


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
            width: '80%',
            borderRadius: 10,
            backgroundColor: theme.WHITE
        },
        xIconContainer: {
            position: 'absolute',
            top: 5,
            right: 5
        },
    });    

    return (
        <TouchableOpacity style={styles.container} onPress={() => functions.f0()}>
            <TouchableHighlight style={styles.window}>
                <>
                    { children }
                    <TouchableOpacity style={styles.xIconContainer} onPress={() => functions.f0()}>
                        <Feather name="x" size={24} color={theme.GRAY} />
                    </TouchableOpacity>
                </>
            </TouchableHighlight >
        </TouchableOpacity>
    )
}

const TrainingGroupsList = ({listItems, itemsInRow, activeItem, functions}) => {
    const styles = StyleSheet.create({
        mainContainer:{
            width: '100%',
        },
        rowContainer:{
            width: '100%',
            paddingVertical: 5,
            paddingHorizontal: 5,
            flexDirection: 'row'
        },
        itemContainer:{
            padding: 5,
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        item: {
            backgroundColor: theme.GRAY,
            position: 'relative',
            height: 36,
            width: 36,
            borderRadius: 18
        },
        iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderWidth: 2,
            borderColor: theme.MAIN_COLOR,
            borderRadius: 18
        }
    })
    
    const items = []
    for(var i0 = 0; i0 <= Math.floor(listItems.length / itemsInRow); i0++){
        const items2 = []
        for(var i = 0; i < Math.min(listItems.length - itemsInRow * i0, itemsInRow); i++){
            const itemIndex = i0 * itemsInRow + i
            items2.push(
                    <TouchableOpacity key={itemIndex} style={styles.itemContainer} onPress={() => functions.f3(itemIndex)}>
                        <View style={styles.item}>
                            { listItems[itemIndex].is_active ?
                                <View style={styles.iconContainer}>
                                    <Feather name="check" size={24} color={theme.MAIN_COLOR} />
                                </View> : null
                            }
                        </View>
                    </TouchableOpacity>
            )
        }
        items.push(
            <View style={styles.rowContainer} key={i0}>
                {items2}
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            {items}
        </View>
    )
}

export const CreateTrainingsWindow = ({functions, state, contentType}) => {
    const styles = StyleSheet.create({
        container: {
            paddingVertical: 20,
            width: '100%',
            alignItems: 'center'
        },
        title: {
            marginBottom: 15,
            color: theme.MAIN_COLOR,
            fontSize: 21,
        },
        alternatives: {
            width: '100%',
            paddingHorizontal: 30, 
            flexDirection: 'row'
        },
        alternativeItem: {
            width: '50%',
            height: 40,
            backgroundColor: theme.WHITE,
            borderWidth: 1,
            borderColor: theme.MAIN_COLOR,
            justifyContent: 'center',
            alignItems: 'center'
        },
        activeItem: {
            backgroundColor: theme.MAIN_COLOR,
        },
        activeText: {
            color: theme.WHITE
        },
        border1: {
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10
        },
        border2: {
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10
        },
        alternativesTitle: {
            fontSize: 13,
            fontWeight: 'bold',
            color: theme.MAIN_COLOR
        },
        button: {
            marginTop: 0,
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 10,
            backgroundColor: theme.MAIN_COLOR
        },
        buttonText: {
            color: theme.WHITE,

        }
    })        

    const props = {
        functions,
        listItems: state.CreateTrainingsWindow.content[contentType],
        itemsInRow: 5
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Кому пишем тренировку?</Text>    
            <View style={styles.alternatives}>
                {
                    contentType == 'athletes' ? 
                        <>
                            <View style={{...styles.alternativeItem, ...styles.activeItem, ...styles.border1}}>
                                <Text style={{...styles.alternativesTitle, ...styles.activeText}}>Мои атлеты</Text>
                            </View>
                            <TouchableOpacity style={{...styles.alternativeItem, ...styles.border2}} onPress={() => functions.f2()}>
                                <Text style={{...styles.alternativesTitle}}>Мои группы</Text>
                            </TouchableOpacity>
                        </> :
                        <>
                            <TouchableOpacity style={{...styles.alternativeItem, ...styles.border1}} onPress={() => functions.f1()}>
                                <Text style={{...styles.alternativesTitle}}>Мои атлеты</Text>
                            </TouchableOpacity>
                            <View style={{...styles.alternativeItem, ...styles.activeItem, ...styles.border2}}>
                                <Text style={{...styles.alternativesTitle, ...styles.activeText}}>Мои группы</Text>
                            </View>
                        </>
                }
                
            </View>
            <TrainingGroupsList 
                {...props}
            />
            <View style={styles.button}>
                <Text style={styles.buttonText}>Выбрать</Text>
            </View>
        </View>
    );
}

export const ProfileEditWindow = ({functions, image, form}) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            alignItems: 'center'
        },
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
        <View style={styles.container}>
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
            <TouchableOpacity style={styles.submitButton} onPress={() => image ? (form.submit(), functions.f0()) : null}>
                <Text style={{color:theme.WHITE, fontWeight: 'bold'}}>Обновить</Text>
            </TouchableOpacity>
        </View>
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
        </>
    );
}