import React from 'react'
import Svg, { SvgXml, Rect } from 'react-native-svg'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Platform, Image } from 'react-native'
import { FontAwesome, AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

import ProfileMainScreen from '../screens/ProfileMain'
import StatsMainScreen from '../screens/StatsMain'
import TrainingMainScreen from '../screens/TrainingMain'
import StarMainScreen from '../screens/StarMain'
import MessagesMainScreen from '../screens/MessagesMain'
import { AuthMainC, ChooseUserTypeC, SignUpC, RecoveryC, PinCodeC, NewPasswordC } from '../components/authScreen/container'
import TrainingProgramScreen from '../screens/profileSubScreens/TrainingProgram'
import ConversationScreen from '../screens/messagesSubScreens/Conversation'
import { THEME } from '../theme'

const theme = Platform.OS == 'android' ? THEME.Android : THEME.Ios

export const AuthNavigator = createStackNavigator(
    {
        Auth: AuthMainC,
        ChooseUserType: ChooseUserTypeC,
        SignUp: SignUpC, 
        Recovery: RecoveryC, 
        PinCode: PinCodeC, 
        NewPassword: NewPasswordC
    },
    {
        initialRouteName: 'Auth',
        defaultNavigationOptions: {
            headerShown: false,
        }
    }
)

export const AuthNavigation = createAppContainer(AuthNavigator);

const StatsNavigator = createStackNavigator(
    {
        StatsMain: StatsMainScreen
    },
    {
        initialRouteName: 'StatsMain',
        defaultNavigationOptions: {
            headerShown: false,
        }
    }
)

const MessagesNavigator = createStackNavigator(
    {
        MessagesMain: MessagesMainScreen,
        Conversation: ConversationScreen
    },
    {
        initialRouteName: 'MessagesMain',
        defaultNavigationOptions: {
            headerShown: false,
        }
    }
)

const TrainingNavigator = createStackNavigator(
    {
        TrainingMain: TrainingMainScreen
    },
    {
        initialRouteName: 'TrainingMain',
        defaultNavigationOptions: {
            headerShown: false,
        }
    }
)

const StarNavigator = createStackNavigator(
    {
        StarMain: StarMainScreen,
        
    },
    {
        initialRouteName: 'StarMain',
        defaultNavigationOptions: {
            headerShown: false,
        }
    }
)

const ProfileNavigator = createStackNavigator(
    {
        ProfileMain: ProfileMainScreen,
        TrainingProgram: TrainingProgramScreen
    },
    {
        initialRouteName: 'ProfileMain',
        defaultNavigationOptions: {
            headerShown: false,
            headerBackShown: true
        },
        NavigationOptions: {
            headerShown: true,
        }
    }
)

const BottomNavigator = createMaterialBottomTabNavigator(
    {
        Stats:{ 
            screen: StatsNavigator,
            navigationOptions: {
                tabBarIcon: () => (
                    <Ionicons name="ios-stats" color={theme.GRAY} size={24} />                    
                )
            }
        },
        Messages:{ 
            screen: MessagesNavigator,
            navigationOptions: {
                tabBarIcon: () => (
                    <AntDesign name="message1" color={theme.GRAY} size={24} />
                )
            }
        },
        Training:{ 
            screen: TrainingNavigator,
            navigationOptions: {
                tabBarIcon: () => (
                    <Ionicons name="ios-fitness" color={theme.GRAY} size={24} />
                )
            }
        },
        Star:{ 
            screen: StarNavigator,
            navigationOptions: {
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="star-box-outline" color={theme.GRAY} size={24}/>
                )
            }
        },
        Profile:{ 
            screen: ProfileNavigator,
            navigationOptions: {
                tabBarIcon: () => (
                    <FontAwesome name="user" color={theme.GRAY} size={24} />
                )
            }
        }
    }, 
    {   
        initialRouteName: 'Profile',
        barStyle: {
            backgroundColor: theme.BOTTOM_NAVIGATION_COLOR
        },
        activeColor: theme.GRAY,
    }
)

export const AppNavigation = createAppContainer(BottomNavigator)