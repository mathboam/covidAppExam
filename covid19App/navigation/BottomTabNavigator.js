import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Reports from '../screens/Reports/reports';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={Reports}
        options={{
          title: 'Report',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-paper-plane" />,
        }}
      />
      <BottomTab.Screen
        name="vitals"
        component={LinksScreen}
        options={{
          title: 'Vitals',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-heart" />,
        }}
      />
      <BottomTab.Screen
        name="settings"
        component={LinksScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-cog" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
