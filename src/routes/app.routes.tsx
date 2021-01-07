import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../pages/Login';
import TabRoutes from './tab.routes';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <App.Navigator initialRouteName="Login">
        <App.Screen
          options={{
            cardStyle: { backgroundColor: '#6548A3' },
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <App.Screen
          name="MainBottom"
          component={TabRoutes}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
