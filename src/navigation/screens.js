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
};
