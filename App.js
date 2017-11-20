import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomeStack from './js/navigators/HomeStackNavigator';
import HomeTab from './js/navigators/HomeTabNavigator';

export default class App extends Component<{}> {
  render() {
    return (
      <HomeStack />
    );
  }
}