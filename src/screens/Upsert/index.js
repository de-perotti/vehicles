import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Screen from '../../components/Screen';

class Upsert extends React.Component {
  constructor(props) {
    super(props);

    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'cancel') {
        this.props.navigator.pop();
      } else if (event.id === 'save') {
        this.handleSave();
      }
    }
  }

  handleSave() {}

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

Upsert.defaultProps = {
  editing: false,
  vehicle: null,
};

Upsert.propTypes = {
  editing: PropTypes.bool,
  vehicle: PropTypes.object,
  navigator: PropTypes.object.isRequired,
};

export default Upsert;
