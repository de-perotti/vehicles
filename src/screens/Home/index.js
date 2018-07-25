import React from 'react';
import PropTypes from 'prop-types';
import Screen from '../../components/Screen';
import Filter from './Filter';
import Vehicles from './Vehicles';
import { AddScreen, DetailScreen } from '../../navigation/screens';


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { filter: '' };

    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'add') {
        this.props.navigator.push(AddScreen);
      }
    }
  }

  onSelect(veiculo) {
    return () => {
      this.props.navigator.push({
        ...DetailScreen,
        passProps: { veiculo },
      });
    };
  }

  onChangeFilter(filter) {
    this.setState({ filter });
  }

  render() {
    return (
      <Screen noScroll>
        <Filter
          value={this.state.filter}
          onChangeText={this.onChangeFilter}
        />
        <Vehicles
          filter={this.state.filter}
          onSelect={this.onSelect.bind(this)}
        />
      </Screen>
    );
  }
}


Home.propTypes = {
  navigator: PropTypes.object.isRequired,
};


export default Home;
