import React, { Component } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native'
import MenuHeader from '../menu-header/MenuHeader'
import { stylesHome } from './Home.style'
import MenuCard from '../custom-components/MenuCard'
import { MenuCardConfig } from '../../configs/config-text'
export default class Home extends Component {
    static navigationOptions = {
        header: null
    }
    handleClick(){
        
    }
    renderMenuCards() {
        var result = []
        MenuCardConfig.map((value, index) => {
            result.push(
                <MenuCard
                    imageUri={value.image}
                    title={value.Title}
                    content={value.Content}
                    endCard={index === (MenuCardConfig.length - 1)}
                    handleClick={this.handleClick.bind(this)}
                />
            )
        })
        return result
    }
    render() {
        return (
            <View style={stylesHome.container}>
                <MenuHeader></MenuHeader>
                <ScrollView style={stylesHome.scrollCaterogies}
                    vertical
                    showsVerticalScrollIndicator={false}>
                    {this.renderMenuCards()}
                </ScrollView>
            </View>
        )
    }
}

