import React from 'react';
import { RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import Screen from '../components/Screen';
import { EditScreen } from '../navigation/screens';
import query, { fields } from '../Apollo/queries/veiculo';
import ErrorItem from '../components/ErrorItem';
import Field from '../components/Field';
import MessageItem from '../components/MessageItem';


let enableButtons = false;


class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this._onEditarShouldAppear = this._onEditarShouldAppear.bind(this);
  }

  componentDidMount() {
    if (this.props.data.veiculo) this._onEditarShouldAppear(true);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data.loading !== this.props.data.loading) {
      const should = !this.props.data.loading && !this.props.data.error;
      this._onEditarShouldAppear(should);
    }
  }

  onNavigatorEvent(event) {
    if (event.type === 'ScreenChangedEvent') {
      if (event.id === 'didAppear') {
        enableButtons = true;
      }
    } else if (event.type === 'NavBarButtonPress') {
      if (event.id === 'edit' && enableButtons) {
        enableButtons = false;
        this.props.navigator.push({
          ...EditScreen,
          passProps: { veiculo: this.props.data.veiculo },
        });
      } else if (event.id === 'cancel') {
        this.props.navigator.pop();
      }
    }
  }

  _onEditarShouldAppear(should) {
    this.props.navigator.setButtons({ rightButtons: should ? [{ title: 'Editar', id: 'edit' }] : [] });
  }

  _onRefresh() {
    this.setState({ refreshing: true });

    this.props.data.refetch({ id: this.props.veiculo._id })
      .catch((e) => { if (__DEV__) console.log(e); })
      .then(() => { this.setState({ refreshing: false }); });
  }

  render() {
    const { data } = this.props;
    const { loading, error } = data;

    if (loading) {
      return (
        <MessageItem message="Carregando..." />
      );
    }

    if (error) {
      return (
        <Screen
          scrollViewProps={{
            refreshControl: (
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            ),
          }}
        >
          <ErrorItem
            color="#f44"
            header="Não foi possível carregar detalhes."
            body={[error.message, 'Arraste para tentar novamente.'].join('\n').trim()}
          />
        </Screen>
      );
    }

    return (
      <Screen
        scrollViewProps={{
          refreshControl: (
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          ),
        }}
      >
        { fields.map(f => (
          <Field
            key={f.name}
            disabled
            label={f.label}
            value={this.props.data.veiculo[f.name] || null}
          />
        ))}
      </Screen>
    );
  }
}


Details.propTypes = {
  navigator: PropTypes.object.isRequired,
  veiculo: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};


export default graphql(query, {
  options: props => ({
    variables: {
      id: props.veiculo._id,
    },
  }),
})(Details);
