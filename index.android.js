/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry} from  'react-native';
import FrontReactNative from './app/FrontReactNative';
import { StackNavigator } from 'react-navigation';

import RankView from './app/RankView';

const App = StackNavigator({
  Main : {screen : FrontReactNative},
  Rank : {screen : RankView}
});

AppRegistry.registerComponent('FrontReactNative', () => App);
