import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TextInput, TouchableOpacity, View, LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const f = StyleSheet.create({
  root: {
    height: 60,
    backgroundColor: '#f6f8fa',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 18,
    marginLeft: 5,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  cancelText: {
    color: 'rgb(0, 122, 255)',
    fontSize: 18,
    fontWeight: '100',
  },
  cancelWrapper: {
    marginLeft: 10,
  },
});


class Filter extends React.PureComponent {
  componentWillMount() {
    LayoutAnimation.easeInEaseOut();
  }

  componentDidUpdate(prevProps) {
    const XORValue = (prevProps.value.length && !this.props.value.length)
      || (!prevProps.value.length && this.props.value.length);
    if (XORValue) {
      LayoutAnimation.spring();
    }
  }

  render() {
    const { onChangeText, value } = this.props;
    return (
      <View style={f.root} onLayout={this.props.onLayout}>
        <View style={f.wrapper}>
          <Icon name="magnify" size={22} color="#a2a2a2" />
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
