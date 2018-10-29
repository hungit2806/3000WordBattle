/** @format */

import {AppRegistry} from 'react-native';
import createStackNavigator from './src/components/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => createStackNavigator);
