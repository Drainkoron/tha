import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo'

import { bootstrap } from './src/bootstrap'
import { PopupWindowC } from './src/components/popupWindows/container'
import { MenuBarContainer } from './src/components/menuBar/container'
import { MenuContextProvider } from './src/reducers/MenuReducer'
import { PopupContextProvider } from './src/reducers/PopupReducer'
import { ProfileContextProvider } from './src/reducers/ProfileReducer'
import { TrainingsContextProvider } from './src/reducers/TrainingsReducer'
import { NavigationContextProvider } from './src/context/navigationsContext'
import { UserDataContextProvider } from './src/reducers/UserDataReducer'
import { AuthScreen } from './src/screens/AuthScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [isReady, setIsReady] = useState(false)
  
  if(!isReady){
    return <AppLoading 
      startAsync={bootstrap}
      onFinish={() => setIsReady(true)}
      onError={(err) => console.log(err)}
    />
  }

  return (
    <>
    <UserDataContextProvider>
      <PopupContextProvider>
        <MenuContextProvider>
          <TrainingsContextProvider>
            <ProfileContextProvider>
              <NavigationContextProvider>
                <AuthScreen />
              </NavigationContextProvider>
            </ProfileContextProvider>
          </TrainingsContextProvider>
          <MenuBarContainer />
          <PopupWindowC />
        </MenuContextProvider>
      </PopupContextProvider>
      </UserDataContextProvider>
    </>
  )
}
