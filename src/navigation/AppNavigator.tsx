import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import HelpPage from '../pages/help/HelpModal';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator mode={'modal'} initialRouteName={'TabNavigator'}>
      <AppStack.Screen
        options={{headerShown: false}}
        name={'TabNavigator'}
        component={TabNavigator}
      />
      <AppStack.Screen
        options={{headerShown: true}}
        name={'HelpPage'}
        component={HelpPage}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
