import React, { useState, useContext, useEffect } from 'react';

import { pages, navigatePage } from '../../navigation/NavigationsRouteFunctions'
import { MenuContext } from '../../reducers/MenuReducer'
import { PopupContext } from '../../reducers/PopupReducer'
import { UserDataContext } from '../../reducers/UserDataReducer'
import { getReq, postReq } from '../../requests/request'
import { popupWindowsList } from '../popupWindows/component'
import { MenuBar } from './component'

export const MenuBarContainer = () => {
    const [state, dispatch] = useContext(MenuContext)
    const [popupState, popupDispatch] = useContext(PopupContext)
    const [stateUD, dispatchUD] = useContext(UserDataContext)

    const props = {
        functions: {
            f0: () => dispatch({type:'toggler'}),
            f1: () => (navigatePage(pages.TrainingProgram), dispatch({type:'toggler'})),
            f2: () => (popupDispatch({type:'toggler', window:popupWindowsList.supportWindow}, dispatch({type:'toggler'}))),
            f3: () => (dispatchUD({type:'setProfileData'}, null), dispatchUD({type:'setAuthData'}, null), dispatch({type:'toggler'}))
        }
    }

    return ( !state.isHidden ? <MenuBar {...props}/> : null )
}