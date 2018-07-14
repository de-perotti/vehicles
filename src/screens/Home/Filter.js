import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import buscaVeiculoThunk from '../../thunk/buscaVeiculo';
import { updateFilter } from '../../reducers/filter/value';


class Filter extends React.PureComponent {
  componentDidUpdate(prevProps) {
    const { value, buscaVeiculo } = this.props;
    if (value.length > prevProps.value.length) {
      buscaVeiculo(value);
    }
  }

  render() {
    const { onChangeText, value } = this.props;
    return (
      <View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

Filter.propTypes = {
  buscaVeiculo: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  value: state.filter.value,
});

const mapDispatchToProps = dispatch => ({
  buscaVeiculo: bindActionCreators(buscaVeiculoThunk, dispatch),
  onChangeText: bindActionCreators(updateFilter, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
