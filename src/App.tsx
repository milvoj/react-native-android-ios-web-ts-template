/***
 * react-native-web & webpack: https://blog.kiprosh.com/setup-react-native-web-app-with-typescript-and-webpack/
 * react-native-paper: https://callstack.github.io/react-native-paper/using-on-the-web.html
 * fix for react-native-vector-icons not showing up: https://github.com/callstack/react-native-paper/issues/2346
 * react-navigation: https://reactnavigation.org/docs/getting-started
 **/

import React from 'react';
import {Dimensions, Platform, SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import StoreProvider from './store/StoreProvider';
import AppContainer from "./AppContainer";
import 'setimmediate'
import TabNavigator from "./navigation/TabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

const {height} = Dimensions.get('window');

const App = () => {
  return (
    <StoreProvider>
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
          <SafeAreaView
            style={{
              height: height,
            }}>
            <NavigationContainer linking={{enabled: false, prefixes: []}}>
              <DrawerNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </React.Fragment>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
