import React, { Component } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native'
import MenuHeader from '../menu-header/MenuHeader'
import { stylesHome } from './Home.style'
import ElevatedView from 'react-native-elevated-view'
import { SimpleAnimation } from 'react-native-simple-animations';
export default class Home extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            x: new Animated.Value(-100),
        };
    }
    componentDidMount() {
        Animated.spring(this.state.x, {
            toValue: 0,
        }).start();
    }
    render() {
        return (
            <View style={stylesHome.container}>
                <MenuHeader></MenuHeader>

                <SimpleAnimation
                    delay={0}
                    duration={1000}
                    fade
                    staticType='bounce'
                >
                    <ElevatedView
                        elevation={4}
                        style={stylesHome.caterogy}
                    />
                </SimpleAnimation>
                <SimpleAnimation
                    delay={100}
                    duration={1000}
                    fade
                    staticType='bounce'
                >
                    <ElevatedView
                        elevation={4}
                        style={stylesHome.caterogy}
                    />
                </SimpleAnimation>
                <SimpleAnimation
                    delay={300}
                    duration={1000}
                    fade
                    staticType='bounce'
                >
                    <ElevatedView
                        elevation={4}
                        style={stylesHome.caterogy}
                    />
                </SimpleAnimation>

            </View>
        )
    }
}

