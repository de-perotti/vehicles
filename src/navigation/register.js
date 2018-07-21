import { Navigation } from 'react-native-navigation';
import Home from '../screens/Home/index';
import Details from '../screens/Details';
import Upsert from '../screens/Upset';
import { withGraphQL } from '../helpers/graphql';


export default () => {
  Navigation.registerComponent('vehicles.Home', () => withGraphQL(Home));
  Navigation.registerComponent('vehicles.Details', () => withGraphQL(Details));
  Navigation.registerComponent('vehicles.Upsert', () => withGraphQL(Upsert));
};
