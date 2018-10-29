import React, { Component } from 'react';
import { View, Text } from 'react-native'
import MenuHeader from '../menu-header/MenuHeader'
import { stylesHome } from './Home.style'
export default class Home extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={stylesHome.container}>
                <MenuHeader></MenuHeader>
            </View>
        )
    }
}