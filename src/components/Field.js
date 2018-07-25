import React from 'react';
import {
  StyleSheet, Text, TextInput, View, TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const v = StyleSheet.create({
  upper: {
    fontSize: 16,
  },
  lower: {
    padding: 0,
    margin: 0,
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
    width: '80%',
  },
  icon: {
    alignItems: 'flex-end',
    minWidth: 40,
    width: '20%',
  },
});


class Field extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      error: null,
    };
  }

  handleFocus() {
    this.setState({ focused: true }, () => {
      this.input.focus();
    });
  }

  handleBlur() {
    const { error } = this.props.validation(this.props.value);
    this.setState({ focused: false, error });
  }

  renderDisabled() {
    const { label, value } = this.props;

    return (
      <View style={[v.root, { borderBottomWidth: 1, borderBottomColor: '#ccc' }]}>

        <View style={[v.textContainer, { width: '100%' }]}>

          <Text
            style={v.upper}
          >
            { label }
          </Text>

          <Text
            style={v.lower}
          >
            { value || '-' }
          </Text>

        </View>

      </View>
    );
  }

  render() {
    const {
      label, onChange, validation, placeholder, disabled,
    } = this.props;

    if (disabled) {
      return this.renderDisabled();
    }

    const { focused, error } = this.state;
    const { value } = validation(this.props.value);

    return (
      <TouchableWithoutFeedback
        onPress={this.handleFocus.bind(this, true)}
      >
        <View style={[v.root, { borderBottomWidth: 1, borderBottomColor: '#ccc' }]}>

          <View style={v.textContainer}>

            <Text
              style={[
                v.upper,
                focused && { color: 'rgb(0, 122, 255)' },
                error && { color: 'red' },
              ]}
            >
              { label }
            </Text>

            <TextInput
              placeholder={placeholder}
              ref={(i) => { this.input = i; }}
              style={[
                v.lower,
                error && { borderBottomWidth: 1, borderColor: 'red' },
              ]}
              onFocus={this.handleFocus.bind(this, false)}
              onBlur={this.handleBlur.bind(this)}
              value={value ? value.toString() : ''}
              onChangeText={onChange}
              underlineColorAndroid="transparent"
            />

            { !error
              ? null
              : (
                <Text style={{ color: 'red', fontSize: 10 }}>
                  {error}
                </Text>
              )
            }

          </View>

          <View style={v.icon}>
            <Icon
              name={`chevron-${focused ? 'down' : 'right'}`}
              size={30}
              color="#ccc"
              style={{ fontWeight: 100 }}
            />
          </View>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Field.defaultProps = {
  validation: () => {},
  disabled: false,
  onChange: () => {},
  placeholder: '',
};

Field.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.any.isRequired,
  validation: PropTypes.func,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Field;
