import React, { Component } from 'react';
import { stylesMenuHeader } from './MenuHeader.style'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import ElevatedView from 'react-native-elevated-view'
import { connect } from "react-redux";
import { avtWithTypeLogin } from '../../utils/function.utils'
class MenuHeader extends Component {
        render() {
            return (
                <View style={stylesMenuHeader.container}>
                    <ElevatedView
                        elevation={5}
                        style={stylesMenuHeader.stayElevated}
                    >
                        <View style={stylesMenuHeader.containerAvatar}>
                            <TouchableOpacity>
                                <Image style={stylesMenuHeader.avatar} source={{ uri: avtWithTypeLogin(this.props.userInfo.userInfo) }}></Image>
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
const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
    }
};
const mapDispatchToProps = dispatch => {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuHeader);