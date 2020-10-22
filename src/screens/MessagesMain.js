import { StyleSheet, Text, View, Button, Input, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { pages } from '../navigation/NavigationsRouteFunctions'
import { THEME } from '../theme'

const theme = THEME.Android

const SearchInput = () => {
    const [inputText, setInputText] = useState('')

    const styles = StyleSheet.create({
        searchSection: {
            marginVertical: 10,
            width: '94%',
            height: 42,
            backgroundColor: theme.GRAY,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
        },
        searchIcon: {
            padding: 10,
            color: theme.MAIN_COLOR
        },
        input: {
            paddingHorizontal: 10,
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            color: theme.MAIN_COLOR,
        },
    })
    
    return (
        <View style={styles.searchSection}>
            <TouchableOpacity onPress={() => console.log('Search')}>
                <FontAwesome style={styles.searchIcon} name="search" size={20}/>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="User Nickname"
                placeholderTextColor={theme.MAIN_COLOR}
                onChangeText={(text) => {setInputText(text)}}
                defaultValue={inputText}
                underlineColorAndroid="transparent"
            />
        </View>
    )
}

const UsersList = ({navigation}) => {
    const styles = StyleSheet.create({
        list: {
            overflow: 'hidden',
            marginVertical: 0,
            width: '100%',
            paddingVertical: 0,
            alignItems: 'center',
            flex: 1,
        },
        item: {
            width: '100%',
            paddingVertical: 10,
            paddingHorizontal: 5,
            borderBottomColor: theme.GRAY,
            borderBottomWidth: 2,
            flexDirection: 'row'
        },
        imageContiner: {
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: theme.GRAY
        },
        userNameText: {
            color: theme.MAIN_COLOR,
            fontSize: 21,
            fontWeight: '500',
            paddingHorizontal: 10,
            paddingVertical: 5
        }
        
    })
    
    const users = [
        {name: 'dFdfg dfg1'},
        {name: 'sddf dfg d'},
        {name: 'dFdfg dfg1'},
        {name: 'sddf dfg d'},
        {name: 'dFdfg dfg1'},
        {name: 'sddf dfg d'},
        {name: 'dFdfg dfg1'},
        {name: 'sddf dfg d'},
        {name: 'dFdfg dfg1'},
        {name: 'sddf dfg d'},
    ]

    const renderItem = ({ item, index }) => (
        <TouchableOpacity key={index} style={styles.item} onPress={() => (navigation.navigate(pages.Conversation))}>
            <View style={styles.imageContiner}></View>
            <Text style={styles.userNameText}>{`${item.name}`}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.list}>
            <FlatList
                style={{width: '100%'}}
                data={users}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default MessagesMain = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Переписки</Text>
                <SearchInput />
                <UsersList navigation={navigation}/>
            </View>
        </View>
    );
}

MessagesMain.navigationOptions = {
    headerTitle: 'Messages'
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
        paddingTop: 10,
        paddingHorizontal: 0,
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