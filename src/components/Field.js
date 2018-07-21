import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

class Field extends React.Component {
  render() {
    try {
      const value = this.props.validation(this.props.value);
      return (
        <View>
          <TextInput />
        </View>
      );
    } catch (e) {

    }
  }
}

Field.defaultProps = {
  validation: () => {},
};

Field.propTypes = {
  value: PropTypes.any.isRequired,
  validation: PropTypes.func,
};

export default Field;
