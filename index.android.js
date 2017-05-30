/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry} from  'react-native';
import FrontReactNative from './app/FrontReactNative';
import { StackNavigator } from 'react-navigation';

import CodeType from './app/manage/CodeType';
import RankView from './app/RankView';
import StaffView from './app/staff/StaffView';

const App = StackNavigator({
  Main : {screen : FrontReactNative},
  CodeType : {screen : CodeType},
  Rank : {screen : RankView},
  Staff : {screen : StaffView}
});

AppRegistry.registerComponent('FrontReactNative', () => App);
