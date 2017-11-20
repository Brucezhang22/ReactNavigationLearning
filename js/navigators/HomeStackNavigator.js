import React from 'react';
import {StackNavigator} from 'react-navigation';
import HomeTabNavigator from './HomeTabNavigator';
import ChatScreen from '../screens/Chat';

const HomeStack = StackNavigator({
    Home:{
        screen: HomeTabNavigator,
        navigationOptions:{
            title:'My Contacts'
        }
    },
    Chat:{
        screen: ChatScreen
    }
});

export default HomeStack;