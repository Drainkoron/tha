import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, TextInput, Form, Animated } from 'react-native';
import React, { useState } from 'react';
import { Entypo, FontAwesome, Zocial } from '@expo/vector-icons';

import { THEME } from '../../theme'
import { Preloader } from '../preloader'
import { pages } from '../../navigation/NavigationsRouteFunctions'

const bgImage = require('../../../assets/icons/AuthBackgroundImage.png')

const theme = THEME.Android

const ChangeLanguageComponent = () => {
    const languages = ['AA', 'BB', 'EN', 'RU']
    const [widthAnim] = useState(new Animated.Value(42))
    const [content, setContent] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const styles = StyleSheet.create({
        container: {
            overflow: 'hidden',
            width: 42,
            height: 42,
            borderRadius: 21,
            borderColor: theme.WHITE,
            borderWidth: 3,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 40, 
            right: 20,
            flexDirection: 'row'
        },
        item: {
            width: 42,
            height: 42,
            borderRadius: 21,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            color: theme.WHITE,
            fontWeight: 'bold',
            fontSize: 19,
        }
    })
    var LanguagesContent = []

    for(var i=0; i<3; i++){
        LanguagesContent.push(<TouchableOpacity style={styles.item}>
            <Text style={styles.text}>{languages[i]}</Text>
        </TouchableOpacity>)
    }

    const toggler = () => {
        console.log(isOpen)
        if(!isOpen){
            Animated.timing(
                widthAnim, {
                    toValue: 168,
                    duration: 300,
                    useNativeDriver: false
                }
            ).start()
            setIsOpen(true)
        }
        else {
            Animated.timing(
                widthAnim, {
                    toValue: 42,
                    duration: 300,
                    useNativeDriver: false
                }
            ).start()
            setIsOpen(false)
        }
    }

    return (
        <Animated.View style={{...styles.container, width: widthAnim}}>
            { isOpen ? LanguagesContent : null}
            <TouchableOpacity style={styles.item} onPress={() => toggler()}>
                <Text style={styles.text}>{languages[3]}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export const AuthTemplate = ({children}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.MAIN_COLOR,
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageContainer: {
            height: '100%',
            width: '100%',
            backgroundColor: theme.GRAY,
            position: 'absolute',
        },
        mainContent: {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        bgImage: {
            flex: 1
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground 
                    blurRadius={1}
                    style={styles.bgImage}
                    source={bgImage}
                />
            </View>
            <View style={styles.mainContent}>
                <ChangeLanguageComponent />
                {
                    children
                }
            </View>
        </View>
    )
}

const Input = ({form, name, placeholder, secureTextEntry, Icon}) => {
    const styles = StyleSheet.create({
        inputSection: {
            marginBottom: 10,
            borderColor: theme.LIGHT_GRAY,
            borderWidth: 2,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',

        },
        input: {
            flex: 1,
            color: theme.WHITE,
            paddingVertical: 10,
            paddingHorizontal: 10
        },
        iconContainer: {
            width: 40,
            justifyContent:'center',
            alignItems: 'center',
        }
    })
    
    return (
        <View style={styles.inputSection}>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={styles.input}
                placeholder={placeholder}
                onChangeText={(text) => {form.handleChange(name, text)}}
                value={form.values[name]}
                underlineColorAndroid="transparent"
            />
            <View style={styles.iconContainer}>
                {Icon ? <Icon /> : null}
            </View>
        </View>
    )
}

const PinCodeInput = ({form, name, loader}) => {
    const styles = StyleSheet.create({
        inputSection: {
            marginTop: 10,
            borderColor: theme.LIGHT_GRAY,
            borderWidth: 2,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
        },
        input: {
            flex: 1,
            color: theme.WHITE,
            paddingVertical: 10,
            paddingHorizontal: 10
        }
    })
    
    return (
        <View style={styles.inputSection}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => {form.handleChange(name, text)}}
                value={form.values.name}
                underlineColorAndroid="transparent"
            />
        </View>
    )
}

export const AuthPage = ({form, functions, loader}) => {
    const styles = {
        wrapper: {
            width: '96%',
            backgroundColor: 'rgba(54, 53, 53, 0.5)',
            minHeight: 200,
            paddingVertical: 30,
            paddingHorizontal: 10,
            alignItems: 'center'
        },
        title: {
            width: '80%',
            color: theme.WHITE,
            fontSize: 18,
            textAlign: 'center',
            borderBottomColor: theme.WHITE,
            borderBottomWidth: 2,
            paddingBottom: 5
        },
        errorContainer: {
            backgroundColor: '#e3412b',
            width: '80%',
            marginBottom: 10,
            borderRadius: 5,
            padding: 5
        },
        errorText: {
            color: theme.WHITE
        },
        authWith: {
            marginBottom: 10,
            alignItems: 'center'
        },
        authWithTitle: {
            marginVertical: 10,
            color: theme.WHITE,
            fontSize: 15,
        },
        facebookIcon: {
            borderRadius: 15,
            backgroundColor: theme.MAIN_COLOR,
            color: theme.WHITE,
            padding: 7
        },
        form: {
            alignItems: 'center',
            width: '80%'
        },
        forgotPasswordContainer: {
            width: '100%',
            paddingVertical: 5,
            alignItems: 'flex-end'
        },
        forgotPasswordText: {
            color: theme.WHITE,
            fontSize: 15,
        },
        submit: {
            marginTop: 20,
            backgroundColor: theme.WHITE,
            paddingVertical: 10,
            width: 150,
            textAlign: 'center',
            borderRadius: 20,
            fontWeight: 'bold'
        }
    }

    return (
        <View style={styles.wrapper}>
            {
                loader ? <Preloader /> : 
                <>
                    <Text style={styles.title}>Хочешь стать частью настоящей тяжелой атлетики?</Text>
                    <View style={styles.authWith}>
                        <Text style={styles.authWithTitle}>Войти с помощью</Text>
                        <TouchableOpacity>
                            <Entypo style={styles.facebookIcon} name="facebook" size={32} />
                        </TouchableOpacity>
                    </View>
                    {
                        form.error ? 
                            <View style={styles.errorContainer}>
                                <Text style={styles.errorText}>{form.error}</Text>
                            </View> :
                            null
                    }
                    <View style={styles.form}>
                        <Input form={form} name={'email'} placeholder={'E-Mail'} Icon={() => <Zocial name="email" size={24} color={theme.WHITE} />}/>
                        <Input form={form} name={'password'} placeholder={'Пароль'} secureTextEntry={true} Icon={() => <FontAwesome name="lock" size={24} color={theme.WHITE} />}/>
                        <View style={styles.forgotPasswordContainer}>
                            <TouchableOpacity onPress={() => functions.f0()}>
                                <Text style={styles.forgotPasswordText}>
                                    Забыли пароль?
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => form.submit()}>
                            <Text style={styles.submit}>
                                Войти
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => functions.f1()}>
                            <Text style={{...styles.submit, backgroundColor: 'black', color: theme.WHITE}}>
                                Регистрация
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
            
        </View>
    )
}

export const ChooseUserTypePage = ({functions}) => {
    const styles = {
        wrapper: {
            width: '96%',
            backgroundColor: 'rgba(54, 53, 53, 0.5)',
            minHeight: 200,
            paddingVertical: 30,
            paddingHorizontal: 10,
            alignItems: 'center'
        },
        title: {
            width: '80%',
            color: theme.WHITE,
            fontSize: 21,
            fontWeight: 'bold',
            textAlign: 'center',
            borderBottomColor: theme.WHITE,
            borderBottomWidth: 2,
            paddingBottom: 5
        },
        alternatives: {
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'space-between',
            marginTop: 30
        },
        alternativesContainer: {
            flex: 1,
            borderWidth: 2,
            borderColor: theme.WHITE,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
        },
        alternativesTitle: {
            color: theme.WHITE,
            fontSize: 18,
            fontWeight: 'bold'
        }
    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Зарегистрироваться как</Text>
            <View style={styles.alternatives}>
                <TouchableOpacity style={styles.alternativesContainer} onPress={() => functions.f0()}>
                    <Text style={styles.alternativesTitle}>Тренер</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alternativesContainer} onPress={() => functions.f1()}>
                    <Text style={styles.alternativesTitle}>Атлет</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const SignUpPage = ({userType, userTypeTitle, form, loader}) => {
    const styles = {
        wrapper: {
            width: '96%',
            backgroundColor: 'rgba(54, 53, 53, 0.5)',
            minHeight: 200,
            paddingVertical: 30,
            paddingHorizontal: 10,
            alignItems: 'center'
        },
        title: {
            width: '80%',
            color: theme.WHITE,
            fontSize: 18,
            textAlign: 'center',
            borderBottomColor: theme.WHITE,
            borderBottomWidth: 2,
            paddingBottom: 5
        },
        authWith: {
            alignItems: 'center'
        },
        authWithTitle: {
            marginVertical: 10,
            color: theme.WHITE,
            fontSize: 15,
        },
        facebookIcon: {
            borderRadius: 15,
            backgroundColor: theme.MAIN_COLOR,
            color: theme.WHITE,
            padding: 7
        },
        form: {
            marginTop: 10,
            alignItems: 'center',
            width: '80%'
        },
        forgotPasswordContainer: {
            width: '100%',
            paddingVertical: 5,
            alignItems: 'flex-end'
        },
        forgotPasswordText: {
            color: theme.WHITE,
            fontSize: 15,
        },
        submit: {
            marginTop: 20,
            backgroundColor: theme.WHITE,
            paddingVertical: 10,
            width: 150,
            textAlign: 'center',
            borderRadius: 20,
            fontWeight: 'bold'
        },
        errorContainer: {
            backgroundColor: '#e3412b',
            width: '80%',
            marginTop: 10,
            borderRadius: 5,
            padding: 5
        },
        errorText: {
            color: theme.WHITE
        },
    }

    return (
        <View style={styles.wrapper}>
            {
                loader ? <Preloader /> : 
                <>
                    <Text style={styles.title}>Я {userTypeTitle}</Text>
                    {
                        form.error ? 
                            <View style={styles.errorContainer}>
                                <Text style={styles.errorText}>{form.error}</Text>
                            </View> :
                            null
                    }
                    <View style={styles.form}>
                        <Input form={form} name={'first_name'} placeholder={'Имя'} />
                        <Input form={form} name={'last_name'} placeholder={'Фамилия'}/>
                        <Input form={form} name={'email'} placeholder={'E-Mail'} Icon={() => <Zocial name="email" size={24} color={theme.WHITE} />}/>
                        <Input form={form} name={'password'} placeholder={'Пароль'} secureTextEntry={true} Icon={() => <FontAwesome name="lock" size={24} color={theme.WHITE} />}/>
                        <TouchableOpacity onPress={() => form.submit()}>
                            <Text style={{...styles.submit, backgroundColor: 'black', color: theme.WHITE}}>
                                Регистрация
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
        </View>
    )
}

export const RecoveryPage = ({form, loader}) => {
    const styles = {
        wrapper: {
            width: '96%',
            backgroundColor: 'rgba(54, 53, 53, 0.5)',
            minHeight: 200,
            paddingVertical: 30,
            paddingHorizontal: 10,
            alignItems: 'center'
        },
        title: {
            width: '80%',
            color: theme.WHITE,
            fontSize: 21,
            fontWeight: 'bold',
            textAlign: 'center',
            borderBottomColor: theme.WHITE,
            borderBottomWidth: 2,
            paddingBottom: 5
        },
        submit: {
            marginTop: 20,
            backgroundColor: theme.DANGER,
            color: theme.WHITE,
            paddingVertical: 10,
            width: 150,
            textAlign: 'center',
            borderRadius: 20,
            fontWeight: 'bold'
        },
        form: {
            marginTop: 10,
            alignItems: 'center',
            width: '80%'
        },
        errorContainer: {
            backgroundColor: '#e3412b',
            width: '80%',
            marginTop: 10,
            borderRadius: 5,
            padding: 5
        },
        errorText: {
            color: theme.WHITE
        },
    }

    return (
        <View style={styles.wrapper}>
            {
                loader ?
                    <Preloader /> : 
                    <>
                        <Text style={styles.title}>Востоновление</Text>
                        {
                            form.error ? 
                                <View style={styles.errorContainer}>
                                    <Text style={styles.errorText}>{form.error}</Text>
                                </View> :
                                null
                        }
                        <View style={styles.form}>
                            <Input form={form} name={'email'} placeholder={'E-Mail'} Icon={() => <Zocial name="email" size={24} color={theme.WHITE} />}/>
                            <TouchableOpacity onPress={() => form.submit()}>
                                <Text style={styles.submit}>
                                    Отправить
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
            }
        </View>
    )
}

export const PinCodePage = ({form, loader}) => {
    const styles = {
        wrapper: {
            width: '96%',
            backgroundColor: 'rgba(54, 53, 53, 0.5)',
            minHeight: 200,
            paddingVertical: 30,
            paddingHorizontal: 10,
            alignItems: 'center'
        },
        title: {
            width: '80%',
            color: theme.WHITE,
            fontSize: 21,
            fontWeight: 'bold',
            textAlign: 'center',
            borderBottomColor: theme.WHITE,
            borderBottomWidth: 2,
            paddingBottom: 5
        },
        submit: {
            marginTop: 20,
            backgroundColor: theme.DANGER,
            color: theme.WHITE,
            paddingVertical: 10,
            width: 150,
            textAlign: 'center',
            borderRadius: 20,
            fontWeight: 'bold'
        },
        form: {
            marginTop: 10,
            alignItems: 'center',
            width: '80%'
        },
        errorContainer: {
            backgroundColor: '#e3412b',
            width: '80%',
            marginTop: 10,
            borderRadius: 5,
            padding: 5
        },
        errorText: {
            color: theme.WHITE
        },
    }

    return (
        <View style={styles.wrapper}>
            {
                loader ? <Preloader /> : 
                <>
                    <Text style={styles.title}>Введите PIN-код</Text>
                    {
                        form.error ? 
                            <View style={styles.errorContainer}>
                                <Text style={styles.errorText}>{form.error}</Text>
                            </View> :
                            null
                    }
                    <View style={styles.form}>
                        <PinCodeInput form={form} name={'pinCode'}/>
                        <TouchableOpacity onPress={() => form.submit()}>
                            <Text style={styles.submit}>
                                Отправить
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
        </View>
    )
}

export const NewPasswordPage = ({form, loader}) => {
    const styles = {
        wrapper: {
            width: '96%',
            backgroundColor: 'rgba(54, 53, 53, 0.5)',
            minHeight: 200,
            paddingVertical: 30,
            paddingHorizontal: 10,
            alignItems: 'center'
        },
        title: {
            width: '80%',
            color: theme.WHITE,
            fontSize: 21,
            fontWeight: 'bold',
            textAlign: 'center',
            borderBottomColor: theme.WHITE,
            borderBottomWidth: 2,
            paddingBottom: 5
        },
        submit: {
            marginTop: 20,
            backgroundColor: theme.DANGER,
            color: theme.WHITE,
            paddingVertical: 10,
            width: 150,
            textAlign: 'center',
            borderRadius: 20,
            fontWeight: 'bold'
        },
        form: {
            marginTop: 10,
            alignItems: 'center',
            width: '80%'
        },
        errorContainer: {
            backgroundColor: '#e3412b',
            width: '80%',
            marginTop: 10,
            borderRadius: 5,
            padding: 5
        },
        errorText: {
            color: theme.WHITE
        },
    }

    return (
        <View style={styles.wrapper}>
            {
                loader ? <Preloader /> : 
                <>
                    <Text style={styles.title}>Введите новый пароль</Text>
                    {
                        form.error ? 
                            <View style={styles.errorContainer}>
                                <Text style={styles.errorText}>{form.error}</Text>
                            </View> :
                            null
                    }
                    <View style={styles.form}>
                        <Input form={form} name={'password'} placeholder={'Пароль'} secureTextEntry={true} Icon={() => <FontAwesome name="lock" size={24} color={theme.WHITE} />}/>
                        <Input form={form} name={'repeat_password'} placeholder={'Повторите Пароль'} secureTextEntry={true} Icon={() => <FontAwesome name="lock" size={24} color={theme.WHITE} />}/>
                        <TouchableOpacity onPress={() => form.submit()}>
                            <Text style={styles.submit}>
                                Востановить
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
        </View>
    )
}