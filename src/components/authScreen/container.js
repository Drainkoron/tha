import React, {useState, useContext, useEffect} from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, Form } from 'react-native';

import { AuthTemplate, AuthPage, ChooseUserTypePage, SignUpPage, RecoveryPage, PinCodePage, NewPasswordPage } from './components'
import { UserDataContext } from '../../reducers/UserDataReducer'
import { pages } from '../../navigation/NavigationsRouteFunctions'
import { getReq, postReq } from '../../requests/request'
import { endpoints } from '../../requests/constants'
import { THEME } from '../../theme'

const theme = THEME.Android

const bgImage = require('../../../assets/icons/AuthBackgroundImage.png')

export const AuthMainC = ({navigation}) => {
    const [stateUD, dispatchUD] = useContext(UserDataContext)
    const [loader, loaderToggler] = useState(false)
    const [error, setError] = useState(null)
    const [state, setState] = useState({
        values: {
            email: '',
            password: ''
        }
    })

    const handleChange = (input, data) => {
        var newValues = {...state}
        newValues.values[input] = data
        setState(newValues)
    }
    
    const submit = () => {
        loaderToggler(true)
        postReq(endpoints.get_token, {username:state.values.email, password:state.values.password}).then(data => {
            loaderToggler(false)
            console.log(data)
            dispatchUD({type:'setAuthData', payload:{email:state.values.email, access:data.access}})
		}, error => {
            setState({
                values: {
                    email: state.values.email,
                    password: ''
                }
            })
            loaderToggler(false)
			setError(error)
		})
    }

    const props = {
        loader,
        functions: {
            f0: () => {navigation.navigate(pages.Recovery)},
            f1: () => {navigation.navigate(pages.ChooseUserType)}
        },
        form: {
            handleChange: handleChange,
            submit: submit,
            values: state.values,
            error: error
        }
    }
    
    return (
        <AuthTemplate>
            <AuthPage {...props}/>
        </AuthTemplate>
    )
}

export const ChooseUserTypeC = ({navigation}) => {
    const [stateUD, dispatchUD] = useContext(UserDataContext)
    const [loader, loaderToggler] = useState(false)
    const [error, setError] = useState(null)
    const props = {
        loader,
        functions: {
            f0: () => {navigation.navigate(pages.SignUp), dispatchUD({type:'setUserType', payload:true})},
            f1: () => {navigation.navigate(pages.SignUp), dispatchUD({type:'setUserType', payload:false})}
        }    
    }
    
    return (
        <AuthTemplate>
            <ChooseUserTypePage {...props}/>
        </AuthTemplate>
    )
}

export const SignUpC = ({navigation}) => {
    const [stateUD, dispatchUD] = useContext(UserDataContext)
    const [error, setError] = useState(null)
    const [loader, loaderToggler] = useState(false)
    const [state, setState] = useState({
        values: {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    })

    const handleChange = (input, data) => {
        var newValues = {...state}
        newValues.values[input] = data
        setState(newValues)
    }
    
    const submit = () => {
        loaderToggler(true)
        postReq(endpoints.registration, {...state.values}).then(data => {
            loaderToggler(false)
            dispatchUD({type:'setRegistrationData', payload:{...state.values}})
            navigation.navigate(pages.PinCode)
		}, error => {
            setState({
                values: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: ''
                }
            })
            loaderToggler(false)
            setError(error)
		})
    }

    const props = {
        loader,
        form: {
            handleChange: handleChange,
            submit: submit,
            values: state.values,
            error: error
        },
        userTypeTitle: stateUD.registrationData.is_coach ? 'тренер' : 'атлет'
    }

    return (
        <AuthTemplate>
            <SignUpPage {...props}/>
        </AuthTemplate>
    )
}

export const RecoveryC = ({navigation}) => {
    const [stateUD, dispatchUD] = useContext(UserDataContext)
    const [loader, loaderToggler] = useState(false)
    const [error, setError] = useState(null)
    const [state, setState] = useState({
        values: {
            email: '',
        }
    })

    const handleChange = (input, data) => {
        var newValues = {...state}
        newValues.values[input] = data
        setState(newValues)
    }
    
    const submit = () => {
        loaderToggler(true)
        postReq(endpoints.password_recovery, {...state.values}).then(data => {
            loaderToggler(false)
            navigation.navigate(pages.PinCode2)
            dispatchUD({type:'setRecoveryEmail', payload:state.values.email})
        }, error => {
            setState({
                values: {
                    email: ''
                }
            })
            loaderToggler(false)
            setError(error)
		})
    }

    const props = {
        loader,
        form: {
            handleChange: handleChange,
            submit: submit,
            values: state.values,
            error: error
        }
    }
    
    return (
        <AuthTemplate>
            <RecoveryPage {...props}/>
        </AuthTemplate>
    )
}

export const PinCodeC = ({navigation}) => {
    const [stateUD, dispatchUD] = useContext(UserDataContext)
    const [loader, loaderToggler] = useState(false)
    const [error, setError] = useState(null)
    const [state, setState] = useState({
        values: {
            pinCode: '',   
        }
    })

    const handleChange = (input, data) => {
        var newValues = {...state}
        newValues.values[input] = data
        setState(newValues)
    }

    const submit = () => {
        loaderToggler(true)
        postReq(endpoints.confirm_email, {pin: state.values.pinCode, email:stateUD.registrationData.email}).then(data => {
            postReq(endpoints.get_token, {username: stateUD.registrationData.email, password:stateUD.registrationData.password}).then(data => {
                loaderToggler(false)
                dispatchUD({type:'setAuthData', payload:{access:data.access, email:stateUD.registrationData.email}})
            }, error => {
                setState({
                    values: {
                        pinCode: '',
                    }
                })
                loaderToggler(false)
                setError(error)
            })
		}, error => {
            setError(error)
            loaderToggler(false)
		})
    }

    const props = {
        loader,
        form: {
            handleChange: handleChange,
            submit: submit,
            values: state.values,
            error: error
        }
    }

    return (
        <AuthTemplate>
            <PinCodePage {...props}/>
        </AuthTemplate>
    )
}

export const PinCodeC2 = ({navigation}) => {
    const [stateUD, dispatchUD] = useContext(UserDataContext)
    const [loader, loaderToggler] = useState(false)
    const [error, setError] = useState(null)
    const [state, setState] = useState({
        values: {
            pinCode: '',   
        }
    })

    const handleChange = (input, data) => {
        var newValues = {...state}
        newValues.values[input] = data
        setState(newValues)
    }
    
    const submit = () => {
        loaderToggler(true)
        postReq(endpoints.check_pin, {pin: state.values.pinCode, email:stateUD.recoveryData.email}).then(data => {
            loaderToggler(false)
            navigation.navigate(pages.NewPassword)
		}, error => {
            setState({
                values: {
                    pinCode: '',
                }
            })
            loaderToggler(false)
            setError(error)
		})
    }

    const props = {
        loader,
        form: {
            handleChange: handleChange,
            submit: submit,
            values: state.values,
            error: error
        }
    }

    return (
        <AuthTemplate>
            <PinCodePage {...props}/>
        </AuthTemplate>
    )
}

export const NewPasswordC = ({navigation}) => {
    const [stateUD, dispatchUD] = useContext(UserDataContext)
    const [loader, loaderToggler] = useState(false)
    const [error, setError] = useState(null)
    const [state, setState] = useState({
        values: {
            password: '',
            repeat_password: ''   
        }
    })

    const handleChange = (input, data) => {
        var newValues = {...state}
        newValues.values[input] = data
        setState(newValues)
    }
    
    const submit = () => {
        state.values.password == state.values.repeat_password ? (
            loaderToggler(false),
            postReq(endpoints.change_password, {password: state.values.password, email:stateUD.recoveryData.email}).then(data => {
                loaderToggler(false)
                console.log(data)
                navigation.popToTop()
            }, error => {
                setState({
                    values: {
                        password: '',
                        repeat_password: ''
                    }
                })
                loaderToggler(false)
                setError(error)
            })) : (setError('Passwords does not match.'), setState({
            values: {
                password: '',
                repeat_password: ''
            }
        }))
    }

    const props = {
        loader,
        form: {
            handleChange: handleChange,
            submit: submit,
            values: state.values,
            error: error
        }
    }
    
    return (
        <AuthTemplate>
            <NewPasswordPage {...props}/>
        </AuthTemplate>
    )
}
