import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
export const stylesMenuCard = StyleSheet.create({
    caterogy: {
        backgroundColor: 'white',
        height: hp('17%'),
        width: wp('95%'),
        borderRadius: hp('3%'),
        marginTop: hp('2%'),
        marginLeft: wp('2.5%'),
        flexDirection:'row'
    },
    caterogyEnd: {
        backgroundColor: 'white',
        height: hp('17%'),
        width: wp('95%'),
        borderRadius: hp('3%'),
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
        marginLeft: wp('2.5%'),
        flexDirection:'row'
    },
    containerIcon:{
        height: hp('17%'),
        width: hp('17%'),
    },
    iconMenu:{
        height:hp('12%'),
        width:hp('12%'),
        borderRadius:hp('6%'),
        marginTop:hp('2.5%'),
        marginLeft:hp('2.5%'),
        flexDirection:'row',
    },
    imgCategory:{
        height:hp('7%'),
        width:hp('7%'),
        marginTop:hp('2.5%'),
        marginLeft:hp('2.5%')
    },
    containerTitle:{
        height: hp('17%'),
        width: wp('95%') - hp('17%'),
        flexDirection:'column',
        textAlignVertical: "center"
    },
    title:{
        marginTop:hp('2.5%'),
        fontSize:hp('2.5%'),
        fontWeight: 'bold',
    },
    content:{
        marginRight:wp('2%'),
        fontSize:hp('2.2%'),
    }

})