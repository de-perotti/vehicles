import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Field from './Field';
import validators from '../helpers/validation';

const normalizeFields = fields => fields.reduce(({ values, validation, keys }, field) => ({
  values: {
    ...values,
    [field.name]: field.initialValue,
  },
  validation: {
    ...validation,
    [field.name]: field.validation || validators[field.type],
  },
  keys: [...keys, field.name],
}), { values: {}, validation: {}, keys: [] });


class VehicleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = normalizeFields(this.props.fields);
  }

  getValues() {
    return this.__validate();
  }

  __validate() {
    const { values, validation, keys } = this.state;
    return keys.reduce((response, field) => ({
      ...response,
      [field]: validation[field](values[field]),
    }), {});
  }

  handleChange(field, value) {
    this.setState({
      values: {
        ...this.state.values,
        [field]: value,
      },
    });
  }

  renderFields() {
    return this.state.keys.map(key => (
      <Field
        key={key}
        onChange={this.handleChange.bind(this, key)}
        value={this.state.values[key]}
        validation={this.state.validation[key]}
      />
    ));
  }

  render() {
    return (
      <View>
        { this.renderFields() }
      </View>
    );
  }
}


export default VehicleForm;
