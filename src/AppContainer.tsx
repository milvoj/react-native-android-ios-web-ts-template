/***
 * react-native-web & webpack: https://blog.kiprosh.com/setup-react-native-web-app-with-typescript-and-webpack/
 * react-native-paper: https://callstack.github.io/react-native-paper/using-on-the-web.html
 * fix for react-native-vector-icons not showing up: https://github.com/callstack/react-native-paper/issues/2346
 * react-navigation: https://reactnavigation.org/docs/getting-started
 **/

import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './navigation/AppNavigator';
import {observer} from 'mobx-react-lite';
import {useStore} from './store/StoreProvider';

const AppContainer = observer(() => {
  const {authStore} = useStore();

  console.log(authStore);

  return <AppNavigator />;
});

export default AppContainer;
