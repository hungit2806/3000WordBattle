import { createStackNavigator } from 'react-navigation'
import Home from './home/Home'
import Login from './login-screen/Login'
import Splash from './splash-screen/Splash'
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers/index.reducer';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas/index.saga';
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const MyNavigator = createStackNavigator({
  Splash: {
    screen: Splash
  },
  LogSignScreen: {
    screen: Login
  },
  Home: {
    screen: Home,
  },
})
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyNavigator />
      </Provider>
    )
  }
}
sagaMiddleware.run(sagas);