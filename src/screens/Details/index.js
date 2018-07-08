import React from 'react';
import { Text } from 'react-native';
import Screen from '../../components/Screen';
import { EditScreen } from '../../navigation/screens';

let enableButtons = false;

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'ScreenChangedEvent') {
      if (event.id === 'didAppear') {
        enableButtons = true;
      }
    }
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'edit' && enableButtons) {
        enableButtons = false;
        this.props.navigator.push({
          ...EditScreen,
          passProps: { edit: true, vehicle: this.props.vehicle },
        });
      } else if (event.id === 'cancel') {
        this.props.navigator.pop();
      }
    }
  }

  render() {
    return (
      <Screen>
        <Text>
          Details
        </Text>
      </Screen>
    );
  }
}

export default Details;
