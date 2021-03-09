import React from "react";
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import HomePage from "../pages/home/HomePage";
import SettingsPage from "../pages/settings/SettingsPage";
import HelpPage from "../pages/help/HelpModal";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      openByDefault
      drawerType={isLargeScreen ? 'permanent' : 'back'}
      drawerStyle={isLargeScreen ? null : {width: '100%'}}
      overlayColor="transparent">
        <Drawer.Screen name="Home" component={HomePage} options={{headerShown: true}}/>
        <Drawer.Screen name="Settings" component={SettingsPage} options={{headerShown: true}}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
