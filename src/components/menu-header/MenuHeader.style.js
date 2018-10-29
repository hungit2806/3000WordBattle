import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
export const stylesMenuHeader = StyleSheet.create({
    container: {
        height: hp('9%'),
        width: wp('100%'),
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        shadowOpacity: 1,   
    },
    stayElevated:{
        height: hp('9%'),
        width: wp('100%'),
        flexDirection:'row'
    },
    containerAvatar:{
        width:hp('9%'),
        height:hp('9%'),
        textAlign: 'center',
        alignItems: 'center',
        borderRightWidth:1,
        borderRightColor:'#ddd',
        justifyContent: 'center',           
    },
    avatar:{
        width:hp('8%'),
        height:hp('8%'),
        borderRadius:hp('4%'),
    },
    containerCoin:{
        height:hp('9%'),
        width:wp('100%')-hp('18%'),
        borderRightWidth:1,
        borderRightColor:'#ddd',
        flexDirection:'row'
    },
    imageCoin:{
        width:hp('6%'),
        height:hp('6%'),
        marginTop:hp('1.5%'),
        marginLeft:wp('2%'),
    },
    textCoin:{
        width:wp('98%')-hp('34%'),
        fontSize:hp('6%'),
        marginLeft:wp('2%'),
        textAlign:'center',
    },
    containerIconPlus:{
        width:hp('9'),
        height:hp('9%'),
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',      
    },
    imagePlus:{
        width:hp('6%'),
        height:hp('6%'),
    },
    containerSetting:{
        width:hp('9'),
        height:hp('9%'),
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',      
    },
    imageControls:{
        width:hp('5%'),
        height:hp('5%'),
    }
});