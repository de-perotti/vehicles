import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BUSCA_VEICULO_FILTER, noFilter } from '../../thunk/buscaVeiculo';
import VeiculoListItem from '../../components/VeiculoListItem';
import FilterError from '../../components/FilterError';
import { defaultRequestState } from '../../reducers/requests';


class Vehicles extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      shouldRenderError: false,
    };

    this.timeout = null;
  }

  componentDidMount() {
    this.props.buscaVeiculo({
      page: 1,
      limit: 20,
    });
  }

  componentDidUpdate() {
    if (this.timeout) clearTimeout(this.timeout);

    const {
      resultado, filtro, request,
    } = this.props;

    const requestNotStartedOrOnGoing = !request.started || !request.finished;
    const noResults = !!filtro.length && !resultado.length;
    const shouldRenderFalse = noResults && !requestNotStartedOrOnGoing;

    if (shouldRenderFalse === this.state.shouldRenderError) return;

    if (shouldRenderFalse) {
      this.timeout = setTimeout(() => { this.setState({ shouldRenderError: true }); }, 1000);
    } else {
      this.setState({ shouldRenderError: false });
    }
  }

  render() {
    const {
      veiculos, filtro, onSelect,
    } = this.props;

    if (this.state.shouldRenderError) {
      return <FilterError value={filtro} />;
    }

    return (
      <FlatList
        data={veiculos}
        keyExtractor={item => item._id}
        onEndReached={() => { console.log('cheguei no fim'); }}
        renderItem={({ item }) => (
          <VeiculoListItem key={item._id} veiculo={item} onPress={onSelect(item)} />
        )}
      />
    );
  }
}


Vehicles.defaultProps = {
  request: defaultRequestState,
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
  resultado: state.filter.result,
  request: state.requests[BUSCA_VEICULO_FILTER],
});


const mapDispatchToProps = dispatch => ({
  buscaVeiculo: bindActionCreators(noFilter, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
