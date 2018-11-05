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
        return (
            <View style={stylesLogin.container}>
                <Logo></Logo>
                <Form></Form>
            </View>
        )
    }
}