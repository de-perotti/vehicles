import React from 'react';
import {
  Dimensions, FlatList, Platform, RefreshControl, ScrollView,
} from 'react-native';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import query from '../../Apollo/queries/buscaVeiculo';
import VeiculoListItem from '../../components/VeiculoListItem';
import MessageItem from '../../components/MessageItem';
import FilterError from '../../components/FilterError';


const { height } = Dimensions.get('window');
const maxHeight = height - (105 + (Platform.OS === 'ios' ? 20 : 0));

class Vehicles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
  }

  handleEndReached() {
    const { buscaVeiculo, fetchMore } = this.props.data;
    const { pagination: { hasNextPage, page } } = buscaVeiculo;
    if (hasNextPage) {
      fetchMore({
        variables: {
          page: page + 1,
          limit: 20,
          query: '',
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            ...fetchMoreResult,
            buscaVeiculo: {
              ...fetchMoreResult.buscaVeiculo,
              veiculos: [
                ...prev.buscaVeiculo.veiculos,
                ...fetchMoreResult.buscaVeiculo.veiculos,
              ],
            },
          };
        },
      })
        .catch((e) => {
          if (__DEV__) console.log(e.graphQLErrors);
        });
    }
  }

  _onRefresh() {
    const { refetch } = this.props.data;
    this.setState({ refreshing: true });
    refetch({
      page: 1,
      limit: 20,
      query: this.props.filter,
    })
      .catch((e) => {
        if (__DEV__) console.log(e);
      })
      .then(() => {
        this.setState({ refreshing: false });
      });
  }

  render() {
    const { onSelect, data, filter } = this.props;
    const { buscaVeiculo, loading, error } = data;

    if (loading) {
      return (
        <MessageItem message="Carregando..." />
      );
    }

    if (error) {
      return (
        <ScrollView
          style={{ height: maxHeight, maxHeight }}
          refreshControl={(
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          )}
        >
          { filter.length
            ? <FilterError value={filter} />
            : <MessageItem message={'Não foi possível obter a lista de veículos.\nArraste para tentar novamente.'} />
          }
        </ScrollView>
      );
    }

    const { veiculos } = buscaVeiculo;

    return (
      <FlatList
        refreshControl={(
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        )}
        style={{ maxHeight }}
        data={veiculos.map(v => v.veiculo)}
        keyExtractor={item => item._id}
        onEndReached={this.handleEndReached.bind(this)}
        renderItem={({ item }) => (
          <VeiculoListItem key={item._id} veiculo={item} onPress={onSelect(item)} />
        )}
      />
    );
  }
}

Vehicles.propTypes = {
  data: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};


export default graphql(query, {
  options: props => ({
    variables: {
      page: 1,
      limit: 20,
      query: props.filter,
    },
  }),
})(Vehicles);
