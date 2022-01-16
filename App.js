import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    /// <StackNavigator/>
    <TabNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
