import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { updateFilter } from '../../reducers/filter/value';
import theme from '../../theme';

const f = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.dark,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {},
  wrapper: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
});


class Filter extends React.PureComponent {
  render() {
    const { onChangeText, value } = this.props;
    return (
      <View style={f.root}>
        <View style={f.wrapper}>
          <Icon name="search" />
          <TextInput
            placeholder="Search"
            style={f.input}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
        { !value.length ? null : (
          <TouchableOpacity onPress={() => onChangeText('')}>
            <Text>
              Cancel
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}


Filter.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
  value: state.filter.value,
});


const mapDispatchToProps = dispatch => ({
  onChangeText: bindActionCreators(updateFilter, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Filter);
