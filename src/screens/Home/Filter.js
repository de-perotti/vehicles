import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import buscaVeiculoThunk from '../../thunk/buscaVeiculo';
import { updateFilter } from '../../reducers/filter';


class Filter extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.value.length > prevProps.value.length) {
      this.props.buscaVeiculo(this.props.value);
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
};

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  buscaVeiculo: bindActionCreators(buscaVeiculoThunk, dispatch),
  onChangeText: bindActionCreators(updateFilter, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
