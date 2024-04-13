import {ImageBackground, Text, View} from 'react-native';
import { style } from './App.style';
import React from "react";
import hotBackground from "./assets/hot.png";


export default function App() {
  return (
    <ImageBackground source={hotBackground} style={style.container}>
      <View style={style.workspace}>
        <View>
          <Text>Temperature</Text>
        </View>
        <View>
          <Text>Input</Text>
        </View>
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
