import ElevatedView from 'react-native-elevated-view'
import { SimpleAnimation } from 'react-native-simple-animations';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react';
import { stylesMenuCard } from './MenuCard.styles'
export default class MenuCard extends Component {
    constructor(props) {
        super(props)
    }
    handleClick(){
        console.log("handleClick")
        this.props.handleClick()
    }
    render() {
        return (
            <SimpleAnimation
                delay={0}
                duration={2000}
                fade
                staticType='bounce'
            >
                <TouchableOpacity onPress={this.handleClick.bind(this)}>
                    <ElevatedView
                        elevation={4}
                        style={!this.props.endCard ? stylesMenuCard.caterogy : stylesMenuCard.caterogyEnd}
                    >
                        <View style={stylesMenuCard.containerIcon}>
                            <ElevatedView
                                elevation={4}
                                style={stylesMenuCard.iconMenu}>
                                <Image source={this.props.imageUri} style={stylesMenuCard.imgCategory}>
                                </Image>
                            </ElevatedView>
                        </View>
                        <View style={stylesMenuCard.containerTitle}>
                            <Text style={stylesMenuCard.title}>{this.props.title}</Text>
                            <Text style={stylesMenuCard.content}>{this.props.content}</Text>
                        </View>
                    </ElevatedView>
                </TouchableOpacity>
            </SimpleAnimation>
        )
    }
}