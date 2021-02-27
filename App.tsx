/*
Following tutorial was used: https://blog.kiprosh.com/setup-react-native-web-app-with-typescript-and-webpack/
* */

import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text>Hello React Native Web!!!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
