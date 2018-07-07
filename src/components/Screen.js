import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  root: {

  },
  scrollView: {

  },
});

const Screen = ({
  style,
  scrollViewStyle,
  children,
  ...props
}) => (
  <View
    style={[
      styles.root,
      style,
    ]}
    {...props}
  >
    <ScrollView
      style={[
        style.scrollView,
        scrollViewStyle,
      ]}
    >
      { children }
    </ScrollView>
  </View>
);

Screen.defaultProps = {
  style: {},
  scrollViewStyle: {},
};

Screen.propTypes = {
  style: PropTypes.object,
  scrollViewStyle: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Screen;
