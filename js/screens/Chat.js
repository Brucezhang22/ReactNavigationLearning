import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Chat extends Component {

    static navigationOptions = ({ navigation }) => {
        console.log(navigation);
        let title = "";
        if (navigation.state.params) {
            title = 'Chat with' + navigation.state.params.username;
        }
        return {
            title: title
        }
    }

    render() {
        const username = this.props.navigation.state.params.username;
        console.log(this.props);
        return (
            <View>
                <Text>Chat with {username}</Text>
            </View>
        );
    }
}   