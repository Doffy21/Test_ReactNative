import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../components/Home';
import Details from '../components/Details';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default StackNavigator

const styles = StyleSheet.create({})
