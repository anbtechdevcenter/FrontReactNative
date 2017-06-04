/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry} from  'react-native';
import Login from './app/Login';
import Main from './app/Main';
import { StackNavigator } from 'react-navigation';

import CodeType from './app/manage/CodeType';
import RankView from './app/RankView';
import StaffView from './app/staff/StaffView';
import StaffDetail from './app/staff/StaffDetail';

const App = StackNavigator({
  Main : {screen : Main},
  Login : {screen : Login},
  CodeType : {screen : CodeType},
  Rank : {screen : RankView},
  Staff : {screen : StaffView},
  StaffDetail : {screen :StaffDetail}
});

AppRegistry.registerComponent('FrontReactNative', () => App);
