import React from 'react';
import PropTypes from 'prop-types';
import Screen from '../components/Screen';
import VehicleForm from '../components/VehicleForm';
import { fields } from '../queries/veiculo';


class Upsert extends React.Component {
  constructor(props) {
    super(props);

    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

    this.fields = fields.map(field => ({ ...field, initialValue: this.props.vehicle[field.name] }));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'cancel') {
        this.props.navigator.pop();
      } else if (event.id === 'save') {
        this.handleSave();
      }
    }
  }

  handleSubmit() {
    const { values, errors, keys } = this.form.getValues();
    if (this.props.editing) {
      this.handleEdit();
    } else {
      this.handleSave();
    }
  }

  render() {
    return (
      <Screen>
        <VehicleForm ref={(f) => { this.form = f; }} fields={this.fields} />
      </Screen>
    );
  }
}

Upsert.propTypes = {
  vehicle: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
};


export default Upsert;
