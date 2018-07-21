import React from 'react';
import { FlatList } from 'react-native';
import { graphql } from 'react-apollo';
import query from '../../queries/buscaVeiculo';
import VeiculoListItem from '../../components/VeiculoListItem';
import MessageItem from '../../components/MessageItem';
import FilterError from '../../components/FilterError';


class Vehicles extends React.Component {
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
      }).then(console.log)
        .catch((e) => {
          console.log(e.graphQLErrors);
        });
    }
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
      return filter.length
        ? <FilterError value={filter} />
        : <MessageItem message="Não foi possível obter a lista de veículos" />;
    }

    const { veiculos } = buscaVeiculo;

    return (
      <FlatList
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


export default graphql(query, {
  options: props => ({
    variables: {
      page: 1,
      limit: 20,
      query: props.filter,
    },
  }),
})(Vehicles);
