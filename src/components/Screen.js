import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

const Screen = ({
  style,
  scrollViewStyle,
  scrollViewProps,
  children,
  noScroll,
  ...props
}) => (
  <View
    style={[
      styles.root,
      style,
    ]}
    {...props}
  >
    { noScroll ? (
      <View
        style={[
          style.scrollView,
          scrollViewStyle,
        ]}
        {...scrollViewProps}
      >
        { children }
      </View>
    ) : (
      <ScrollView
        style={[
          style.scrollView,
          scrollViewStyle,
        ]}
        {...scrollViewProps}
      >
        { children }
      </ScrollView>
    )}
  </View>
);

Screen.defaultProps = {
  style: {},
  scrollViewStyle: {},
  scrollViewProps: {},
  noScroll: false,
};

Screen.propTypes = {
  noScroll: PropTypes.bool,
  style: PropTypes.object,
  scrollViewStyle: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  scrollViewProps: PropTypes.object,
};

export default Screen;
