import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SingIn from '../screens/SingIn';
import Dashboard from '../screens/Dashboard';

const { Navigator, Screen } = createNativeStackNavigator();


// não precisa escrever um objeto com retorno
// existe tbm essa forma de escrita que é válida, retornando apenas um TSX

const AppRoutes = () => (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen 
        name="Dashboard"
        component={Dashboard}
      />
    </Navigator>
);

export default AppRoutes;