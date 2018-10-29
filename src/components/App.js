import { createStackNavigator } from 'react-navigation'
import Home from './home/Home'

export default createStackNavigator({
    Home: {
      screen: Home,
    },
})