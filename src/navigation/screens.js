const navigatorStyle = {
  topBarElevationShadowEnabled: false,
  navBarNoBorder: true,
  navBarBackgroundColor: '#f6f8fa',
};


export const Home = {
  screen: 'vehicles.Home',
  title: 'Lista',
  navigatorButtons: {
    rightButtons: [
      {
        title: '+',
        id: 'add',
        buttonColor: 'rgb(0, 122, 255)',
        buttonFontSize: 32,
        buttonFontWeight: '200',
      },
    ],
  },
  navigatorStyle,
};


export const AddScreen = {
  screen: 'vehicles.Insert',
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
  screen: 'vehicles.Update',
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
  },
  navigatorStyle,
};
