import React from 'react';
import PropTypes from 'prop-types';
import Screen from '../../components/Screen';
import Filter from './Filter';
import Vehicles from './Vehicles';
import { AddScreen, EditScreen } from '../../navigation/screens';


let enableButtons = false;


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vehicles: [] };

    this.handleEdit = this.handleEdit.bind(this);
    this.setVehicles = this.setVehicles.bind(this);
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

  setVehicles(vehicles) {
    this.setState({ vehicles });
  }

  handleEdit(vehicle) {
    if (enableButtons) {
      enableButtons = false;
      this.props.navigator.push({
        ...EditScreen,
        passProps: { editing: true, vehicle },
      });
    }
  }

  render() {
    const { vehicles } = this.state;

    return (
      <Screen>
        <Filter
          onResult={this.setVehicles}
        />
        <Vehicles
          vehicles={vehicles}
          onSelect={this.handleEdit}
        />
      </Screen>
    );
  }
}

Home.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default Home;
