import { Navigation } from 'react-native-navigation';
import Home from '../screens/Home/index';
import Details from '../screens/Details/index';
import Upsert from '../screens/Upsert/index';

export default () => {
  Navigation.registerComponent('vehicles.Home', () => Home);
  Navigation.registerComponent('vehicles.Details', () => Details);
  Navigation.registerComponent('vehicles.Upsert', () => Upsert);
};
