import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
export const stylesHome = StyleSheet.create({
    container: {
        height: hp('100%'),
        width: wp('100%'),
        flexDirection: 'column',
    }
});