import { Provider } from 'react-redux';
import store from './Store';
import registerScreens from './navigation/register';
import startApp from './navigation/startApp';

if (__DEV__) {
  console.disableYellowBox = true;
}

registerScreens(store, Provider);
startApp();
