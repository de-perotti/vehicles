import React from 'react';
import { Text, View } from 'react-native';
import Screen from '../../components/Screen';

class Upsert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'cancel') {
        this.props.navigator.pop();
      } else if (event.id === 'save') {
        console.log('save');
      }
    }
  }

  render() {
    return (
      <Screen>
        <View>
          <Text>
            Upsert
          </Text>
        </View>
      </Screen>
    );
  }
}

export default Upsert;
