import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { StackActions,NavigationActions } from 'react-navigation';
import { LOADING_USER_INFO, ADD_USER_INFO_GOOGLE } from '../../actions/login.actions'
import { connect } from "react-redux";
import Toast from 'react-native-simple-toast';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { LoginManager } from 'react-native-fbsdk';
import { saveDataStorage } from '../../utils/load-data-storage.utils'
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

class LogSignScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: false
    }
  }
  componentWillMount() {  
    GoogleSignin.hasPlayServices(); 
    GoogleSignin.configure({
      webClientId: '801195824412-lovdv1ejtjasro602qbg4kjp88kshf4e.apps.googleusercontent.com'
    })
  }
  handleCallbackLogin(result) {
    let _this = this
    if (result.isCancelled) {
      alert('Login cancelled');
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          const dataPublish = data
          _this.props.getUserInfo(dataPublish)
        })
        .catch(function (err) {
        });
    }
  }
  showLoginFB() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      (result) => this.handleCallbackLogin(result),
      function (error) {
        Toast.show(error.toString());
      }
    )
  }
  async signInGoogle () {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = GoogleSignin.signIn().then((user) => {
        var userInfoStorage = {
          type: "google",
          email:user.user.id,
          id: user.user.id,
          accessToken: user.accessToken,
          userName: user.user.familyName + " " + user.user.givenName,
          photo:user.user.photo
        }
        saveDataStorage('loginState',userInfoStorage)
        this.props.addUserInfoGoogle(userInfoStorage)
        this.props.navigation.dispatch(StackActions.reset({index: 0, actions:[NavigationActions.navigate({routeName: 'Home'})]}))
      })
      .catch((err) => {
        Toast.show(err.toString());
      })
      .done();     
    } catch (error) {
      Toast.show(err.toString());
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  componentDidUpdate() {
    if (this.props.userInfo.loadingUser && !this.props.userInfo.failed) {
      saveDataStorage('loginState', this.props.userInfo.userInfo)
      this.props.navigation.dispatch(StackActions.reset({index: 0, actions:[NavigationActions.navigate({routeName: 'Home'})]}))
    }
    // if(this.props.userInfo.loadingUserInfoStorage && this.props.userInfo.userInfoStorage){
    //   this.props.navigation.push("Home")
    // }
  }
  render() {
    return (


      <View style={styles.container}>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Email"
          placeholderTextColor="#d2d2d2"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#d2d2d2"
          ref={(input) => this.password = input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LogIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.buttonFB} onPress={this.showLoginFB.bind(this)}>
            <View style={styles.containerBtnFb}>
              <Image style={{ width: hp('4%'), height: hp('4%'), }} source={require('../../assets/icons/facebook.png')}></Image>
              <Text style={styles.buttonTextFB}>Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.signInGoogle.bind(this)}>
            <View style={styles.containerBtnGG} >
              <Image style={{ width: hp('4%'), height: hp('4%'), }} source={require('../../assets/icons/google.png')}></Image>
              <Text style={styles.buttonTextFB}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    getUserInfo: (publicInfo) => dispatch({ type: LOADING_USER_INFO, publicInfo: publicInfo }),
    addUserInfoGoogle: (userInfo) => dispatch({ type: ADD_USER_INFO_GOOGLE, userInfo: userInfo }), 
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LogSignScreen);


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: wp('80%'),
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: hp('2.5%'),
    color: '#000000',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#d2d2d2'
  },
  button: {
    width: wp('80%'),
    backgroundColor: '#51b58f',
    borderRadius: 25,
    marginTop: hp('2%'),
    height: hp('8%')
  },
  buttonRegister:
  {
    width: wp('80%'),
    backgroundColor: '#4aaaf6',
    borderRadius: 25,
    marginTop: hp('2%'),
    height: hp('8%')
  },
  containerBtnGG: {
    width: wp('39%'),
    backgroundColor: '#dc4e41',
    borderRadius: 25,
    height: hp('8%'),
    flexDirection: 'row',
    marginTop: hp('2%'),
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: hp('2.5%'),
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: hp('8%')
  },
  buttonTextFB: {
    fontSize: hp('2.5%'),
    fontWeight: '500',
    color: '#ffffff',
    lineHeight: hp('8%'),
    marginLeft: wp('2%'),
  },
  containerBtnFb: {
    width: wp('39%'),
    marginRight: wp('2%'),
    flexDirection: 'row',
    backgroundColor: '#4267b2',
    borderRadius: 25,
    height: hp('8%'),
    marginTop: hp('2%'),
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  }
});

