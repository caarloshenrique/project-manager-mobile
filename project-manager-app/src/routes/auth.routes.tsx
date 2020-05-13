import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Dashboard: { project: object };
};

const Auth = createStackNavigator<RootStackParamList>();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen
      name="Dashboard"
      component={Dashboard}
      initialParams={{ project: undefined }}
    />
  </Auth.Navigator>
);

export default AuthRoutes;
