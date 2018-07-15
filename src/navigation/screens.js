import theme from '../theme';


const navigatorStyle = {
  topBarElevationShadowEnabled: false,
  navBarNoBorder: true,
  navBarBackgroundColor: theme.colors.dark,
};


export const Home = {
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
  navigatorStyle,
};


export const AddScreen = {
  screen: 'vehicles.Upsert',
  title: 'Adicionar',
  animated: true,
  passProps: { editing: false },
  navigatorButtons: {
    leftButtons: [
      {
        title: 'Cancelar',
        id: 'cancel',
      },
    ],
    rightButtons: [
      {
        title: 'Salvar',
        id: 'save',
      },
    ],
  },
  navigatorStyle,
};


export const EditScreen = {
  ...AddScreen,
  title: 'Editar',
};

export const DetailScreen = {
  screen: 'vehicles.Details',
  title: 'Detalhes',
  navigatorButtons: {
    leftButtons: [
      {
        title: 'Voltar',
        id: 'cancel',
      },
    ],
    rightButtons: [
      {
        title: 'Editar',
        id: 'edit',
      },
    ],
  },
  navigatorStyle,
};
