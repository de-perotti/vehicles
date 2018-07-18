import { Navigation } from 'react-native-navigation';
import Home from '../screens/Home/index';
import Details from '../screens/Details/index';
import Upsert from '../screens/Upsert/index';
import { withGraphQL } from '../helpers/graphql';


export default (store, Provider) => {
  Navigation.registerComponent('vehicles.Home', () => withGraphQL(Home), store, Provider);
  Navigation.registerComponent('vehicles.Details', () => withGraphQL(Details), store, Provider);
  Navigation.registerComponent('vehicles.Upsert', () => withGraphQL(Upsert), store, Provider);
};
