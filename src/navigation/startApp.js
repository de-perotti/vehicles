import { Navigation } from 'react-native-navigation';

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'vehicles.Home',
    title: 'Lista',
    navigatorButtons: {
      rightButtons: [
        {
          title: '+',
          id: 'add',
          buttonColor: 'blue',
          buttonFontSize: 30,
          buttonFontWeight: '200',
        },
      ],
    },
  },
});
