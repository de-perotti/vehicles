/* eslint-disable no-console */
import { UIManager } from 'react-native';
import registerScreens from './navigation/register';
import startApp from './navigation/startApp';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

if (__DEV__) {
  console.disableYellowBox = true;
}

registerScreens();
startApp();
