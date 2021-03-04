import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginPage from '../pages/auth/LoginPage';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator mode={'modal'} initialRouteName={'Login'}>
      <AuthStack.Screen
        options={{headerShown: false}}
        name={'Login'}
        component={LoginPage}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
