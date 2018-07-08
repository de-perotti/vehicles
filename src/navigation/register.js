import { Navigation } from 'react-native-navigation';
import Home from '../screens/Home/index';
import Details from '../screens/Details/index';
import Upsert from '../screens/Upsert/index';

export default (store, Provider) => {
  Navigation.registerComponent('vehicles.Home', () => Home, store, Provider);
  Navigation.registerComponent('vehicles.Details', () => Details, store, Provider);
  Navigation.registerComponent('vehicles.Upsert', () => Upsert, store, Provider);
};
