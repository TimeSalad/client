import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Config from 'react-native-config';
import StorybookUIRoot from './storybook';

AppRegistry.registerComponent(appName, () =>
  Config.LOAD_STORYBOOK ? StorybookUIRoot : App,
);
