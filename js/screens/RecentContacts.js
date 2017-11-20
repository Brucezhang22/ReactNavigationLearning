import React, { Component } from 'react';
import { AppRegister, SectionList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default class AllContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            contacts: []
        }
    }

    componentDidMount() {
        var timespan = Math.ceil(Math.random() * 1000);
        setTimeout(() => {
            this.setState({
                isLoading:false,
                recentContacts: [
                    { title: 'B', data: [{ key: 'Bruce' }, { key: 'Batiatis' }] },
                    { title: 'C', data: [{ key: 'Crixus' }] },
                    { title: 'D', data: [{ key: 'Devin' }, { key: 'Donor' }] },
                    { title: 'G', data: [{ key: 'Gannecus' }] },
                    { title: 'O', data: [{ key: 'Omeneous' }] }
                ]
            });
        }, timespan);
    }

    _renderSectionHeader = ({ section }) => {
        return (
            <Text style={styles.sectionHeader}>{section.title}</Text>
        )
    }

    _renderItem = ({ item }) => {
        return (
            <Text style={styles.item}>{item.key}</Text>
        )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.indicatorContainer}>
                    <ActivityIndicator color='#ff0000' />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.state.recentContacts}
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                />
            </View>
        )
    }
}