import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import VeiculoListItem from '../../components/VeiculoListItem';


class Vehicles extends React.Component {
  static getDerivedStateFromProps(props) {
    console.log(props);
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
      }).then(console.log)
        .catch(console.log);
    }
  }

  render() {
    const { onSelect, data } = this.props;
    const { buscaVeiculo, loading, error } = data;

    if (loading) {
      return (
        <View>
          <Text>
            Carregando...
          </Text>
        </View>
      );
    }
    if (error) {
      return (
        <View>
          <Text>
            {error}
          </Text>
        </View>
      );
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


const mapStateToProps = state => ({
  filtro: state.filter.value,
});


export default graphql => connect(mapStateToProps)(graphql(Vehicles));
