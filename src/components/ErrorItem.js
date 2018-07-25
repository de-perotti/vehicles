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


const FilterError = ({ header, body, color }) => (
  <View style={v.root}>
    <Text style={[v.marca, color && { color }]} numberOfLines={null} multiline>
      { header }
    </Text>
    <Text style={[v.modelo, color && { color }]} numberOfLines={null} multiline>
      { body }
    </Text>
  </View>
);


FilterError.defaultProps = {
  header: 'Erro',
  body: 'Não foi possível carregar as informações',
  color: null,
};


FilterError.propTypes = {
  color: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.string,
};


export default FilterError;
