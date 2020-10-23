import React, { useState, useContext, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker'

import { pages, navigatePage } from '../../navigation/NavigationsRouteFunctions'
import { PopupContext } from '../../reducers/PopupReducer'
import { getReq, postReq } from '../../requests/request'
import { endpoints } from '../../requests/constants'
import { UserDataContext } from '../../reducers/UserDataReducer'
import { PopupWindowTemplate, ProfileEditWindow, TutorialWindow, SupportWindow, CreateTrainingsWindow } from './component'

export const popupWindowsList = {
    tutorialWindow: "TUTORIAL_WINDOW",
    profileEditWindow: "PROFILE_EDIT_WINDOW",
    supportWindow: "SUPPORT_WINDOW",
    createTrainingsWindow: "CREATE_TRAINING_WINDOW"
}

export const PopupWindowC = () => {
    const [state, dispatch] = useContext(PopupContext);
    
    const props = {
        state,
        dispatch
    }

    switch(state.popupWindow){
        case popupWindowsList.profileEditWindow:
            return <ProfileEditWindowC {...props}/>
            
        case popupWindowsList.tutorialWindow:
            return <TutorialWindowC {...props}/>
            
        case popupWindowsList.supportWindow:
            return <SupportWindowC {...props}/>        

        case popupWindowsList.createTrainingsWindow:
            return <CreateTrainingsWindowC {...props}/> 
        
        default:
            return null
    }
}

export const ProfileEditWindowC = ({state, dispatch}) => {
    const [stateUD, dispatchUD] = useContext(UserDataContext);
    const [image, setImage] = useState(null);
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
            quality: 1,
        });
            
        if (!result.cancelled) {
            setImage(`data:image/jpg;base64,${result.base64}`)
        }
    };

    const submit = () => {
        postReq(endpoints.upload_profile_image, {email:stateUD.profileData.email, img:image}, stateUD.access).then(data => {
            dispatchUD({type:'setProfileImg', payload:''})
        }, error => {
            console.log(error)
        })
    }

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
    }, []);
    
    const props = {
        state: state,
        functions: {
            f0: () => dispatch({type:'toggler'}),
            f1: () => pickImage()
        },
        form: {
            submit: submit,
        },
        image: image
    }

    return (
        <PopupWindowTemplate {...props}>
            <ProfileEditWindow {...props}/>
        </PopupWindowTemplate>
    )
}

export const TutorialWindowC = ({state, dispatch}) => {
const props = {
        state: state,
        functions: {
            f0: () => dispatch({type:'toggler'})
        }
    }

    return (
        <PopupWindowTemplate {...props}>
            <TutorialWindow />
        </PopupWindowTemplate>
    )
}

export const SupportWindowC = ({state, dispatch}) => {
    const props = {
        state: state,
        functions: {
            f0: () => dispatch({type:'toggler'})
        }
    }
    
    return (
        <PopupWindowTemplate {...props}>
            <SupportWindow {...props}/>
        </PopupWindowTemplate>
    )
}

export const CreateTrainingsWindowC = ({state, dispatch}) => {
    const [contentType, contentTypeToggler] = useState('athletes')

    const props = {
        state,
        contentType,
        functions: {
            f0: () => dispatch({type:'toggler'}),
            f1: () => contentTypeToggler('athletes'),
            f2: () => contentTypeToggler('groups'),
            f3: (itemIndex) => dispatch({type:'setActiveItem', alternative:contentType, payload: itemIndex}),
        }
    }
    
    return (
        <PopupWindowTemplate {...props}>
            <CreateTrainingsWindow {...props}/>
        </PopupWindowTemplate>
    )
} 