import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
export const stylesLogin = StyleSheet.create({
    container: {
        height: hp('100%')-StatusBar.currentHeight,
        width: wp('100%'),
        backgroundColor:'white',
        textAlign:'center',
        alignItems:'center'
    }
});