import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Verify from '../screens/Verification';
import Landing from "../screens/Landing";
import General from '../screens/General';

const Stack = createStackNavigator();

export default function VerificationNav(props) {
  return (
      <Stack.Navigator>
          <Stack.Screen name={'land'} component={Landing} options={{headerShown:false}}/>
          <Stack.Screen name={'verify'} component={Verify} options={{headerShown:false}}/>
          <Stack.Screen name={'general'} component={General} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}
