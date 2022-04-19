import React from 'react';

import { View } from 'react-native';
import { Home } from './src/screens/Home';
import { Calculating } from './src/screens/Calculating'

import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <>
      <Calculating />
    </>
  );
}


