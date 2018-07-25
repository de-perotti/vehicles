import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View,
} from 'react-native';


const v = StyleSheet.create({
  marca: {
    fontSize: 16,
  },
  modelo: {
    fontSize: 12,
  },
  root: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    marginLeft: 15,
  },
  textContainer: {
    justifyContent: 'space-around',
    width: '100%',
  },
  icon: {
    alignItems: 'flex-end',
    minWidth: 40,
    width: '20%',
  },
});


const MessageItem = ({ message, style }) => (
  <View
    style={[v.root, style]}
  >
    <View style={v.textContainer}>
      <Text style={v.marca}>
        { message }
      </Text>
    </View>
  </View>
);

MessageItem.defaultProps = {
  style: null,
};

MessageItem.propTypes = {
  message: PropTypes.string.isRequired,
  style: PropTypes.object,
};


export default MessageItem;
