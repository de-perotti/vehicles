import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import buscaVeiculo from '../../thunk/buscaVeiculo';
import VeiculoListItem from '../../components/VeiculoListItem';
import FilterError from '../../components/FilterError';


class Vehicles extends React.PureComponent {
  componentDidMount() {
    this.props.buscaVeiculo({
      page: 1,
      limit: 20,
    });
  }

  render() {
    const {
      veiculos, resultado, filtro, onSelect, request,
    } = this.props;

    const requestNotStartedOrOnGoing = !request.started || !request.finished;
    const noResults = filtro.length && !resultado.length;

    if (noResults && !requestNotStartedOrOnGoing) {
      return <FilterError value={filtro} />;
    }

    return (
      <FlatList
        data={veiculos}
        renderItem={({ item }) => (<VeiculoListItem veiculo={item} onPress={onSelect(item)} />)}
      />
    );
  }
}


Vehicles.defaultProps = {
  request: {
    started: false,
    finished: false,
    success: null,
    message: '',
  },
};


Vehicles.propTypes = {
  filtro: PropTypes.string.isRequired,
  veiculos: PropTypes.arrayOf(PropTypes.object).isRequired,
  resultado: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  request: PropTypes.object,
  buscaVeiculo: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  filtro: state.filter.value,
  veiculos: state.vehicles.list,
  resultado: state.result,
  request: state.requests.buscaVeiculo,
});


const mapDispatchToProps = dispatch => ({
  buscaVeiculo: bindActionCreators(buscaVeiculo, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
