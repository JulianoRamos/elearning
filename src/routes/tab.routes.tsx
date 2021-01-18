import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import Home from '../pages/Home';
import Saved from '../pages/Saved';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      activeTintColor: '#FF6680',
      labelStyle: {
        fontFamily: 'System',
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 18,
      },
      inactiveTintColor: '#C4C4D1',
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <Icon size={25} name="home" color={color} />,
        title: 'Home',
      }}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Icon size={25} name="heart" color={color} />
        ),
        title: 'Salvos',
      }}
      name="Saved"
      component={Saved}
    />
  </Tab.Navigator>
);

export default TabRoutes;
