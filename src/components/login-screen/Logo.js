import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: hp('10%'), height: hp('10%') }}
                    source={require('../../assets/icons/coins.png')} />
                <Text style={styles.logoText}>LOGIN</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop:hp('5%'),
        
    },
    logoText: {
        marginVertical: 15,
        fontSize: hp('5%'),
        fontWeight:'bold'
    }
});