import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const v = StyleSheet.create({
  marca: {},
  modelo: {},
  root: {},
});


const VeiculoListItem = ({ veiculo, onPress }) => (
  <TouchableOpacity style={v.root} onPress={onPress}>
    <Text style={v.marca}>
      { veiculo.marca }
    </Text>
    <Text style={v.modelo}>
      { veiculo.modelo }
    </Text>
  </TouchableOpacity>
);


VeiculoListItem.propTypes = {
  veiculo: PropTypes.object.isRequired,
  onPress: PropTypes.object.isRequired,
};


export default VeiculoListItem;
