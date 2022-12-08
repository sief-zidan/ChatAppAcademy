import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import auth from '@react-native-firebase/auth';
import Login from './pages/Login';
import HomeScreen from './pages/HomeScreen';
export default function App(props) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  const Stack = createNativeStackNavigator();


  if (initializing) return null;



  return (
    // <HomeScreen user={user.email}/>

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,

          gestureDirection: 'horizontal-inverted',
        }}
      >
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






