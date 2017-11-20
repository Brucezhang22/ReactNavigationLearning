import React from 'react';
import {TabNavigator} from 'react-navigation';
import AllContactsScreen from '../screens/AllContacts';
import RecentContactsScreen from '../screens/RecentContacts';

const HomeTab = TabNavigator({
    AllContacts:{
        screen: AllContactsScreen
    },
    RecentContacts:{
        screen: RecentContactsScreen
    }
});

export default HomeTab;