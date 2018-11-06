import React, { Component } from 'react';
import Logo from './Logo'
import Form from './Form'
import { View } from 'react-native'
import { stylesLogin } from './Login.style'
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        console.log(this.props)
        return (
            <View style={stylesLogin.container}>
                <Logo></Logo>
                <Form  navigation = {this.props.navigation}></Form>
            </View>
        )
    }
}