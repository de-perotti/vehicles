import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    marginLeft: 15,
  },
  textContainer: {
    justifyContent: 'space-around',
    width: '80%',
  },
  icon: {
    alignItems: 'flex-end',
    minWidth: 40,
    width: '20%',
  },
});


const VeiculoListItem = ({ veiculo, onPress }) => (
  <TouchableOpacity
    style={[
      v.root,
      { borderBottomWidth: 1, borderBottomColor: '#ccc' },
    ]}
    onPress={onPress}
  >
    <View style={v.textContainer}>

      <Text style={v.marca}>
        { veiculo.marca || 'Marca não cadastrada' }
      </Text>

      <Text style={v.modelo}>
        { veiculo.modelo }
      </Text>

    </View>

    <View style={v.icon}>
      <Icon name="chevron-right" size={30} color="#ccc" style={{ fontWeight: 100 }} />
    </View>

  </TouchableOpacity>
);


VeiculoListItem.propTypes = {
  veiculo: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};


export default VeiculoListItem;
