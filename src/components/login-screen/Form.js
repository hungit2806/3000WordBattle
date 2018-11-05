import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { LoginManager } from 'react-native-fbsdk';
export default class LogSignScreen extends Component {
  constructor(props) {
    super(props)
  }
  showLoginFB() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log("isCancelled")
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              console.log(data.accessToken.toString())
            }
          )
        }
      },
      function (error) {
        console.log(error)
      } 
    );
  }
  logout(){
    LoginManager.logout();
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
          <TouchableOpacity>
            <View style={styles.containerBtnGG} onPress = {this.logout.bind(this)}>
              <Image style={{ width: hp('4%'), height: hp('4%'), }} source={require('../../assets/icons/google.png')}></Image>
              <Text style={styles.buttonTextFB}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

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

