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
        buttonColor: 'blue',
        buttonFontWeight: '200',
      },
    ],
    rightButtons: [
      {
        title: 'Salvar',
        id: 'save',
        buttonColor: 'blue',
        buttonFontWeight: '200',
      },
    ],
  },
};

export const EditScreen = {
  ...AddScreen,
  title: 'Editar',
};
