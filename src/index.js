/* eslint-disable no-console */
import registerScreens from './navigation/register';
import startApp from './navigation/startApp';

if (__DEV__) console.disableYellowBox = true;

registerScreens();
startApp();
