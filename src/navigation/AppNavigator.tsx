import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import HelpPage from '../pages/help/HelpModal';
import DrawerNavigator from './DrawerNavigator';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator mode={'modal'} initialRouteName={'DrawerNavigator'}>
      <AppStack.Screen
        options={{headerShown: false}}
        name={'DrawerNavigator'}
        component={DrawerNavigator}
      />
      <AppStack.Screen
        options={{headerShown: true}}
        name={'Help'}
        component={HelpPage}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
