/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {configure} from 'mobx';

configure({enforceActions: 'observed'});

AppRegistry.registerComponent(appName, () => App);
