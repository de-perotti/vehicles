import React from 'react';
import PropTypes from 'prop-types';
import Screen from '../../components/Screen';
import Filter from './Filter';
import Vehicles from './Vehicles.graph';
import { AddScreen, DetailScreen } from '../../navigation/screens';


let enableButtons = false;


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'ScreenChangedEvent') {
      if (event.id === 'didAppear') {
        enableButtons = true;
      }
    }
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'add' && enableButtons) {
        enableButtons = false;
        this.props.navigator.push(AddScreen);
      }
    }
  }

  onSelect(vehicle) {
    return () => {
      this.props.navigator.push({
        ...DetailScreen,
        passProps: { vehicle },
      });
    };
  }

  render() {
    return (
      <Screen>
        {/*<Filter />*/}
        <Vehicles onSelect={this.onSelect.bind(this)} />
      </Screen>
    );
  }
}


Home.propTypes = {
  navigator: PropTypes.object.isRequired,
};


export default Home;
