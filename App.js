import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Camera from './screens/Camera';
import ProfileDetails from './screens/ProfileDetails';
import ProfileForms from './screens/ProfileForms';
import ThankYou from './screens/ThankYou';

import 'react-native-gesture-handler';

const AppStack = createStackNavigator();

export default class App extends Component{
  render(){
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none">
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="ProfileDetails" component={ProfileDetails} />
          <AppStack.Screen name="Camera" component={Camera} />       
          <AppStack.Screen name="ProfileForms" component={ProfileForms} />
          <AppStack.Screen name="ThankYou" component={ThankYou} />
        </AppStack.Navigator>
      </NavigationContainer>
  );
};
}
