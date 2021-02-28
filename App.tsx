/***
 * react-native-web & webpack: https://blog.kiprosh.com/setup-react-native-web-app-with-typescript-and-webpack/
 * react-native-paper: https://callstack.github.io/react-native-paper/using-on-the-web.html
 * fix for react-native-vector-icons not showing up: https://github.com/callstack/react-native-paper/issues/2346
 **/

import React from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  IconButton,
  Provider as PaperProvider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {height} = Dimensions.get('window');

const App = () => {
  return (
    <PaperProvider>
      <React.Fragment>
        {Platform.OS === 'web' ? (
          <style type="text/css">
            {`@font-face {
                font-family: 'MaterialCommunityIcons';
                src: url(${
                  require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')
                    .default
                }) format('truetype');
              }`}
          </style>
        ) : null}
        <View style={styles.container}>
          <View style={styles.center}>
            <Text>Hello React Native Web!!!</Text>
            <Button
              icon="menu"
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Press me
            </Button>
            <IconButton
              icon="camera"
              color={'#000000'}
              size={20}
              onPress={() => console.log('Pressed')}
            />
            <Icon size={20} name={'menu'} color={'#000000'} />
          </View>
        </View>
      </React.Fragment>
    </PaperProvider>
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
