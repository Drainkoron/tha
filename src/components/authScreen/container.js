import React, {useState, useContext, useEffect} from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, Form } from 'react-native';

import { AuthTemplate, AuthPage, ChooseUserTypePage, SignUpPage, RecoveryPage, PinCodePage, NewPasswordPage } from './components'
import { UserDataContext } from '../../reducers/UserDataReducer'
import { getReq, postReq } from '../../requests/request'
import { endpoints } from '../../requests/constants'
import { THEME } from '../../theme'

const theme = THEME.Android

const bgImage = require('../../../assets/icons/AuthBackgroundImage.png')


export const Container = () => {
    const [stateUD, dispatchUD] = useContext(UserDataContext)

    const props = {
        stateUD,
        dispatchUD
    }

    if(stateUD.access == null){
        switch(stateUD.page){
            case 'auth':
                return <AuthMainC {...props}/>
            
            case 'signUp':
                return <SignUpC {...props}/>
            
            case 'chooseType':
                return <ChooseUserTypeC {...props}/>
            
            case 'recovery':
                return <RecoveryC {...props}/>

            case 'pinCode':
                return <PinCodeC {...props}/>
            
            case 'pinCode2':
                return <PinCodeC2 {...props}/>

            case 'newPassword':
                return <NewPasswordC {...props}/>
            
            default:
                return null
        }
    }
}

export const AuthMainC = ({stateUD, dispatchUD}) => {
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
        postReq(endpoints.get_token, {username:state.values.email, password:state.values.password}).then(data => {
            dispatchUD({type:'setAccessKey', payload:data.access})
		}, error => {
			console.log('error')
		})
    }

    const props = {
        functions: {
            f0: () => {dispatchUD({type:'setPage', payload:'recovery'})},
            f1: () => {dispatchUD({type:'setPage', payload:'chooseType'})}
        },
        form: {
            handleChange: handleChange,
            submit: submit,
            values: state.values
        }
    }
    
    return (
        <AuthTemplate>
            <AuthPage {...props}/>
        </AuthTemplate>
    )
}
export const ChooseUserTypeC = ({stateUD, dispatchUD}) => {
    const props = {
        functions: {
            f0: () => {dispatchUD({type:'setPage', payload:'signUp'}), dispatchUD({type:'setUserType', payload:true})},
            f1: () => {dispatchUD({type:'setPage', payload:'signUp'}), dispatchUD({type:'setUserType', payload:false})}
        }    
    }
    
    return (
        <AuthTemplate>
            <ChooseUserTypePage {...props}/>
        </AuthTemplate>
    )
}

export const SignUpC = ({stateUD, dispatchUD}) => {
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
        postReq(endpoints.registration, {...state.values}).then(data => {
            dispatchUD({type:'setRegistrationData', payload:{...state.values}})
            dispatchUD({type:'setPage', payload:'pinCode'})
		}, error => {
			console.log(error)
		})
    }

    const props = {
        form: {
            handleChange: handleChange,
            submit: submit,
            values: state.values
        },
        userTypeTitle: stateUD.registrationData.is_coach ? 'тренер' : 'атлет'
    }

    return (
        <AuthTemplate>
            <SignUpPage {...props}/>
        </AuthTemplate>
    )
}
export const RecoveryC = ({stateUD, dispatchUD}) => {
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
        postReq(endpoints.password_recovery, {...state.values}).then(data => {
            dispatchUD({type:'setPage', payload:'pinCode2'})
            dispatchUD({type:'setRecoveryEmail', payload:state.values.email})
        }, error => {
			console.log('error')
		})
    }

    const props = {
        form: {
            handleChange: handleChange,
            submit: submit,
            values: state.values
        }
    }
    
    return (
        <AuthTemplate>
            <RecoveryPage {...props}/>
        </AuthTemplate>
    )
}

export const PinCodeC = ({stateUD, dispatchUD}) => {
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
        postReq(endpoints.confirm_email, {pin: state.values.pinCode, email:stateUD.registrationData.email}).then(data => {
            postReq(endpoints.get_token, {username: stateUD.registrationData.email, password:stateUD.registrationData.password}).then(data => {
                dispatchUD({type:'setAccessKey', payload:data.access})
            }, error => {
                console.log('error')
            })
		}, error => {
			console.log('error')
		})
    }

    const props = {
        form: {
            handleChange: handleChange,
            submit: submit,
            values: state.values
        }
    }

    return (
        <AuthTemplate>
            <PinCodePage {...props}/>
        </AuthTemplate>
    )
}

export const PinCodeC2 = ({stateUD, dispatchUD}) => {
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
        postReq(endpoints.check_pin, {pin: state.values.pinCode, email:stateUD.recoveryData.email}).then(data => {
            dispatchUD({type:'setPage', payload:'newPassword'})
		}, error => {
			console.log('error')
		})
    }

    const props = {
        form: {
            handleChange: handleChange,
            submit: submit,
            values: state.values
        }
    }

    return (
        <AuthTemplate>
            <PinCodePage {...props}/>
        </AuthTemplate>
    )
}

export const NewPasswordC = ({stateUD, dispatchUD}) => {
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
        postReq(endpoints.change_password, {password: state.values.password, email:stateUD.recoveryData.email}).then(data => {
            dispatchUD({type:'setPage', payload:'auth'})
		}, error => {
			console.log('error')
		})
    }

    const props = {
        form: {
            handleChange: handleChange,
            submit: submit,
            values: state.values
        }
    }
    
    return (
        <AuthTemplate>
            <NewPasswordPage {...props}/>
        </AuthTemplate>
    )
}
