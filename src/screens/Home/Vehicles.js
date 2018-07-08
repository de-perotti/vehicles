import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { DetailScreen } from '../../navigation/screens';

const style = StyleSheet.create({
  root: {

  },
  vehicle: {

  },
  title: {

  },
  subtitle: {

  },
});

class Vehicles extends React.PureComponent {
  render() {
    const {
      veiculos, resultado, filtro, onSelect, request,
    } = this.props;

    const requestNotStartedOrOnGoing = !request.started || !request.finished;
    const noResults = filtro.length && !resultado.length;
    if (noResults && !requestNotStartedOrOnGoing) {
      return (
        <View>
          <Text>
            {`Sua busca por ${filtro} não gerou resultados.`}
          </Text>
          <Text>
            Verifique se digitou corretamente ou tente palavras diferentes
          </Text>
        </View>
      );
    }

    return (
      <FlatList
        data={veiculos}
        renderItem={({ item }) => (
          <TouchableOpacity style={style.root} onPress={onSelect(item)}>
            <Text style={style.title}>
              {item.marca}
            </Text>
            <Text style={style.subtitle}>
              {item.modelo}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}

Vehicles.propTypes = {
  filtro: PropTypes.string.isRequired,
  veiculos: PropTypes.arrayOf(PropTypes.object).isRequired,
  resultado: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  request: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  filtro: state.filter,
  veiculos: state.vehicles,
  resultado: state.result,
  request: state.requests.buscaVeiculo || {
    started: false,
    finished: false,
    success: null,
    message: '',
  },
});


export default connect(mapStateToProps)(Vehicles);
