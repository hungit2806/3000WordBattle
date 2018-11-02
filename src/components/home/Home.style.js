import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
export const stylesHome = StyleSheet.create({
    container: {
        height: hp('100%'),
        width: wp('100%'),
        flexDirection: 'column',
    },
    scrollCaterogies: {
        height: hp('91%') - StatusBar.height,
        width: wp('100%'),
        flexDirection: 'row',

    },
    caterogy:{
        backgroundColor:'white',
        height:hp('25%'),
        width: wp('90%'),
        borderRadius:hp('3%'),
        marginTop:hp('3%'),
        marginLeft:wp('5%')
    }
});