import React, { Component } from 'react';
import { LOADING_USER_INFO, LOADING_USER_INFO_STORAGE, RESET_LOADING, RESET_LOADING_STORAGE } from '../../actions/login.actions'
import { AccessToken } from 'react-native-fbsdk';
import { LoginManager } from 'react-native-fbsdk';
import Toast from 'react-native-simple-toast';
import { View } from 'react-native'
import { connect } from "react-redux";
import { saveDataStorage } from '../../utils/load-data-storage.utils'
import { StackActions,NavigationActions } from 'react-navigation';
class Splash extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
    }
    handleCallbackLogin(result) {
        let _this = this
        if (result.isCancelled) {
            alert('Login cancelled');
        } else {
            AccessToken.getCurrentAccessToken().then(
                (data) => {
                    const dataPublish = data
                    console.log(dataPublish)
                    _this.props.getUserInfo(dataPublish)
                })
                .catch(function (err) {
                    console.log(err);
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
    componentDidMount() {
        setTimeout(this.checkStorage.bind(this), 100);
    }
    componentDidUpdate() {
        if (this.props.userInfo.loadingUser && !this.props.userInfo.failed) {
            saveDataStorage('loginState', this.props.userInfo.userInfo)
            this.props.navigation.dispatch(StackActions.reset({index: 0, actions:[NavigationActions.navigate({routeName: 'Home'})]}))
            //this.props.navigation.push("Home")
        }
        if (this.props.userInfo.userInfoStorage != 'error' && this.props.userInfo.loadingUserInfoStorage) {
            this.props.resetLoadingStorage()
            this.showLoginFB()
        } else if (this.props.userInfo.userInfoStorage === 'error' && this.props.userInfo.loadingUserInfoStorage) {
            this.props.resetLoadingStorage()
            //this.props.navigation.push("LogSignScreen")
            this.props.navigation.dispatch(StackActions.reset({index: 0, actions:[NavigationActions.navigate({routeName: 'LogSignScreen'})]}))
        }
    }
    checkStorage() {
        this.props.getUserInfoStorage('loginState')
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#f76467'}}>

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
        getUserInfoStorage: (key) => dispatch({ type: LOADING_USER_INFO_STORAGE, key: key }),
        resetLoading: () => dispatch({ type: RESET_LOADING }),
        resetLoadingStorage: () => dispatch({ type: RESET_LOADING_STORAGE })
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Splash);