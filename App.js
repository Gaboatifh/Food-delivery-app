import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import { styled } from 'nativewind';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';

const StyledView = styled(View)
const StyledText = styled(Text)

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


