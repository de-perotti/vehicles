import React from 'react';
import { Text, View } from 'react-native';

class Filter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>
          Filter
        </Text>
      </View>
    );
  }
}

Filter.propTypes = {
  onSelect: PropTypes.func.isRequired,
}

export default Filter;
