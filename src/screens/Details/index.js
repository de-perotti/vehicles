import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    } else if (event.type === 'NavBarButtonPress') {
      if (event.id === 'edit' && enableButtons) {
        enableButtons = false;
        this.props.navigator.push({
          ...EditScreen,
          passProps: { edit: true },
        });
      } else if (event.id === 'cancel') {
        this.props.navigator.pop();
      }
    }
  }

  render() {
    const { vehicle } = this.props;
    const keys = Object.keys(vehicle).filter(k => vehicle[k] !== null);
    const isLoading = !keys.length;

    return (
      <Screen>
        { isLoading
          ? (
            <View>
              <Text>
                Carregando
              </Text>
            </View>
          ) : (
            <View>
              { keys.map(k => (
                <Text>
                  {`${k}: ${vehicle[k]}`}
                </Text>
              )) }
            </View>
          )
        }
      </Screen>
    );
  }
}


Details.propTypes = {
  navigator: PropTypes.object.isRequired,
  vehicle: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  vehicle: state.vehicle.selected,
});


export default connect(mapStateToProps)(Details);
