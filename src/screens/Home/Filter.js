import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TextInput, TouchableOpacity, View, LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../theme';


const f = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.dark,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  cancelText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: '100',
  },
  cancelWrapper: {
    marginLeft: 5,
  },
});


class Filter extends React.PureComponent {
  componentDidUpdate(prevProps) {
    const XORValue = (prevProps.value.length && !this.props.value.length)
      || (!prevProps.value.length && this.props.value.length);
    if (XORValue) {
      LayoutAnimation.linear();
    }
  }

  render() {
    const { onChangeText, value } = this.props;
    return (
      <View style={f.root}>
        <View style={f.wrapper}>
          <Icon name="magnify" size={20} color="#b2b2b2" />
          <TextInput
            placeholder="Search"
            style={f.input}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
        { !value.length ? null : (
          <TouchableOpacity style={f.cancelWrapper} onPress={() => onChangeText('')}>
            <Text style={f.cancelText}>
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


export default Filter;
