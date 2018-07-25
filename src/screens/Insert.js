import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import ErrorItem from '../components/ErrorItem';
import Screen from '../components/Screen';
import VehicleForm from '../components/VehicleForm';
import { fields } from '../Apollo/queries/veiculo';
import mutation from '../Apollo/mutations/createVeiculo';
import query from '../Apollo/queries/buscaVeiculo';


class Insert extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: null };

    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

    this.fields = [...fields];
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

    this.props.mutate({
      variables: { veiculo: values },
      refetchQueries: [{
        query,
        variables: {
          page: 1,
          limit: 20,
          query: '',
        },
      }],
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
      <Screen
        scrollViewStyle={{ flex: 1 }}
      >
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


Insert.propTypes = {
  navigator: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
};


export default graphql(mutation)(Insert);
