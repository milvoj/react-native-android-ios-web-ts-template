import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from '../pages/home/HomePage';
import SettingsPage from '../pages/settings/SettingsPage';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName = 'blank';
          if (route.name === 'Home') {
            iconName = 'account-outline';
          } else if (route.name === 'Settings') {
            iconName = 'cog-outline';
          }
          return (
            <Icon
              name={iconName}
              size={30}
              color={color}
              //style={Platform.OS === 'web' ? {marginLeft: 100} : null}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: true,
        //style: Platform.OS === 'web' ? {height: 70} : null,
      }}
      initialRouteName={'Home'}>
      <Tab.Screen name={'Home'} component={HomePage} />
      <Tab.Screen name={'Settings'} component={SettingsPage} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
