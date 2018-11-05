import { createStackNavigator } from 'react-navigation'
import Home from './home/Home'
import Login from './login-screen/Login'
export default createStackNavigator({
  LogSignScreen: {
    screen: Login
  },
  Home: {
    screen: Home,
  },
})