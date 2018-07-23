import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';


const v = StyleSheet.create({
  marca: {
    fontSize: 16,
  },
  modelo: {
    fontSize: 12,
  },
  root: {
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    marginTop: 3,
    marginLeft: 15,
  },
});


const FilterError = ({ value }) => (
  <View style={v.root}>
    <Text style={v.marca} numberOfLines={null} multiline>
      {`Sua busca por ${value} não gerou resultados.`}
    </Text>
    <Text style={v.modelo} numberOfLines={null} multiline>
      Verifique se digitou corretamente ou tente palavras diferentes
    </Text>
  </View>
);


FilterError.propTypes = {
  value: PropTypes.string.isRequired,
};


export default FilterError;
