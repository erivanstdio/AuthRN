import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SingIn from '../screens/SingIn';
import Dashboard from '../screens/Dashboard';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes = () => {
  
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="SingIn"
        component={SingIn}
      />
      <Screen 
        name="Dashboard"
        component={Dashboard}
      />
    </Navigator>
  );
}

export default AuthRoutes;