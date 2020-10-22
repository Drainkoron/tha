import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput, Animated } from 'react-native';
import { Feather, Fontisto, AntDesign, Ionicons } from '@expo/vector-icons';
import { THEME } from '../../theme'

const theme = THEME.Android

export const MenuBar = ({functions}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => functions.f0()}>
            <TouchableHighlight style={{...styles.window}}>
                <>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.navigationItem}>
                            <Text style={styles.navigationItemText}>Язык</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigationItem} onPress={() => functions.f1()}>
                            <Text style={styles.navigationItemText}>Программа Тренировок</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigationItem} onPress={() => functions.f2()}>
                            <Text style={styles.navigationItemText}>Тех. Поддержка</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigationItem}>
                            <Text style={styles.navigationItemText}>Купить тренировки</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigationItem}>
                            <Text style={styles.navigationItemText}>FAQ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigationItem}>
                            <Text style={styles.navigationItemText}>Политика конф.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigationItem}>
                            <Text style={styles.navigationItemText}>О нас</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigationItem}>
                            <Text style={styles.navigationItemText}>Калькулятор веса</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigationItem}>
                            <Text style={styles.navigationItemText}>Видеобиблиотека</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigationItem}>
                            <Text style={styles.navigationItemText} onPress={() => functions.f3()}>Выйти</Text>
                        </TouchableOpacity>
                    </View>
                </>
            </TouchableHighlight>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        flex: 1,
        backgroundColor: 'rgba(27, 27, 27, 0.4)',
    },
    window: {
        position: 'relative',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '70%',
    },
    menuContainer:{
        paddingVertical: 40,
        paddingHorizontal: 10,
        height: '100%',
        width: '100%',
        backgroundColor: theme.WHITE
    },
    navigationItem: {
        marginVertical: 10,
    },
    navigationItemText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: theme.MAIN_COLOR
    },
    hr: {
        width: '98%',
        height: 1,
        backgroundColor: theme.GRAY,
    }

});