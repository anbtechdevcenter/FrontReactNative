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
import RankView from './app/manage/RankView';
import StaffView from './app/staff/StaffView';
import StaffDetail from './app/staff/StaffDetail';
import Holiday from './app/holiday/Holiday';

const App = StackNavigator({
  Login : {screen : Login},
  Main : {screen : Main},
  CodeType : {screen : CodeType},
  Rank : {screen : RankView},
  Staff : {screen : StaffView},
  StaffDetail : {screen :StaffDetail},
  Holiday : {screen : Holiday}
});

AppRegistry.registerComponent('FrontReactNative', () => App);
