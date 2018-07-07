import React from 'react';
import { Text } from 'react-native';
import Screen from '../../components/Screen';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
