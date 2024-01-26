import { Redirect } from 'expo-router';
import React = require('react');
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Redirect href="/(tabs)/discover" />
    </GestureHandlerRootView>);
}
