import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import Screen from '../components/Screen';
import VehicleForm from '../components/VehicleForm';
import query, { fields } from '../Apollo/queries/veiculo';
import mutation from '../Apollo/mutations/updateVeiculo';
import ErrorItem from '../components/ErrorItem';


class Upsert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };

    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

    this.fields = fields.map(field => ({
      ...field,
      initialValue: this.props.veiculo[field.name] ? this.props.veiculo[field.name].toString() : '',
    }));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'cancel') {
        this.props.navigator.pop();
      } else if (event.id === 'save') {
        this.handleSubmit();
      }
    }
  }

  handleSubmit() {
    const { values, errors } = this.form.getValues();
    if (errors.length) return;

    const { _id } = this.props.veiculo;

    this.props.mutate({
      variables: { veiculo: { ...values, _id } },
      refetchQueries: [{ query, variables: { _id } }],
    })
      .then(() => {
        this.setState({ error: null }, () => {
          this.props.navigator.pop();
        });
      })
      .catch((e) => {
        if (__DEV__) console.log(e);
        this.setState({ error: e.graphQLErrors.reduce((msg, err) => `${msg}\n${err.message}`, '').trim() });
      });
  }

  render() {
    return (
      <Screen>
        { this.state.error ? (
          <ErrorItem
            color="#f44"
            header="Não foi possível salvar formulário."
            body={this.state.error.length ? this.state.error : 'Tente novamente mais tarde.'}
          />
        ) : null }
        <VehicleForm ref={(f) => { this.form = f; }} fields={this.fields} />
      </Screen>
    );
  }
}

Upsert.propTypes = {
  veiculo: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
};


export default graphql(mutation)(Upsert);
