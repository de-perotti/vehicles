import { Navigation } from 'react-native-navigation';

import App from './App';


Navigation.registerComponent('vehicles.Home', () => App);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'vehicles.Home', // unique ID registered with Navigation.registerScreen
    title: 'Vehicles', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});
