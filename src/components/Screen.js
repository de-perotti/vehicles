import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollView: {},
});

const Screen = ({
  style,
  scrollViewStyle,
  scrollViewProps,
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
      {...scrollViewProps}
    >
      { children }
    </ScrollView>
  </View>
);

Screen.defaultProps = {
  style: {},
  scrollViewStyle: {},
  scrollViewProps: {},
};

Screen.propTypes = {
  style: PropTypes.object,
  scrollViewStyle: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  scrollViewProps: PropTypes.object,
};

export default Screen;
