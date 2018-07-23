import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import Screen from '../components/Screen';
import VehicleForm from '../components/VehicleForm';
import { fields } from '../queries/veiculo';
import mutation from '../queries/createVeiculo';
import query from '../queries/buscaVeiculo';


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
      updateQueries: [{ query }],
    })
      .then((res) => {
        console.log(res);
        this.setState({ error: null });
      })
      .catch((e) => {
        console.log(e, e.graphQLErrors);
        this.setState({ error: e.graphQLErrors.reduce((msg, err) => msg + err.message, '') });
      });
  }

  render() {
    return (
      <Screen>
        { this.state.error ? (
          <View>
            <Text>
              Não foi possível salvar formulário
            </Text>
            <Text>
              {this.state.error.length ? this.state.error : 'Tente novamente mais tarde'}
            </Text>
          </View>
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
