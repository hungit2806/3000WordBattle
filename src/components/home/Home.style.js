import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
export const stylesHome = StyleSheet.create({
    scrollCaterogies: {
        height: hp('91%') - StatusBar.height,
        width: wp('100%'),
        flex:1
       
    },
    container: {
        height: hp('100%'),
        width: wp('100%'),
        flexDirection: 'column',
        flex:1,
    },
});