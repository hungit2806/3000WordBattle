import React, { Component } from 'react';
import { stylesMenuHeader } from './MenuHeader.style'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import ElevatedView from 'react-native-elevated-view'
export default class MenuHeader extends Component {
    render() {
        return (
            <View style={stylesMenuHeader.container}>
                <ElevatedView
                    elevation={5}
                    style={stylesMenuHeader.stayElevated}
                >
                    <View style={stylesMenuHeader.containerAvatar}>
                        <TouchableOpacity>
                            <Image style={stylesMenuHeader.avatar} source={{ uri: 'https://scontent.fdad5-1.fna.fbcdn.net/v/t1.0-9/41751613_1401625099941229_2828854796188909568_n.jpg?_nc_cat=110&_nc_ht=scontent.fdad5-1.fna&oh=e58826bf7f4754eee504e4eb4080c69a&oe=5C7A9563' }}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesMenuHeader.containerCoin}>
                        <Image style={stylesMenuHeader.imageCoin} source={require('../../assets/icons/coins.png')}></Image>
                        <Text style={stylesMenuHeader.textCoin}>0</Text>
                        <View style={stylesMenuHeader.containerIconPlus}>
                            <TouchableOpacity>
                                <Image style={stylesMenuHeader.imagePlus} source={require('../../assets/icons/plus.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={stylesMenuHeader.containerSetting}>
                            <TouchableOpacity>
                                <Image style={stylesMenuHeader.imageControls} source={require('../../assets/icons/controls.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ElevatedView>
            </View>
        )
    }
}