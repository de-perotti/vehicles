import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Field from './Field';
import validators from '../helpers/validation';


const normalizeFields = fields => fields.reduce(({
  values, validation, labels, keys, placeholders,
}, field) => ({
  values: {
    ...values,
    [field.name]: field.initialValue === undefined ? '' : field.initialValue,
  },
  validation: {
    ...validation,
    [field.name]: field.validation || validators[field.type],
  },
  labels: {
    ...labels,
    [field.name]: field.label,
  },
  placeholders: {
    ...placeholders,
    [field.name]: field.placeholder || '',
  },
  keys: [...keys, field.name],
}), {
  values: {}, validation: {}, labels: {}, keys: [], placeholders: {},
});


class VehicleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = normalizeFields(this.props.fields);
  }

  getValues() {
    return this.__validate();
  }

  __validate() {
    return this.state.keys.reduce(({ values, errors, keys }, field) => {
      const { error, value } = this.state.validation[field](this.state.values[field]);
      return {
        values: { ...values, [field]: value },
        errors: [...errors, ...(error ? [error] : [])],
        keys,
      };
    }, { values: {}, errors: [], keys: this.state.keys });
  }

  handleChange(field, value) {
    this.setState(state => ({
      values: {
        ...state.values,
        [field]: value,
      },
    }));
  }

  renderFields() {
    return this.state.keys.map(key => (
      <Field
        label={this.state.labels[key]}
        key={key}
        placeholder={this.state.placeholders[key]}
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

VehicleForm.propTypes = {
  fields: PropTypes.array.isRequired,
};


export default VehicleForm;
