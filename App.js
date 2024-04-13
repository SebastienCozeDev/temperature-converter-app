import {ImageBackground, Text, View} from 'react-native';
import { style } from './App.style';
import React from "react";
import hotBackground from "./assets/hot.png";
import {InputTemperature} from "./components/InputTemperature/InputTemperature";


export default function App() {
  return (
    <ImageBackground source={hotBackground} style={style.container}>
      <View style={style.workspace}>
        <View>
          <Text>Temperature</Text>
        </View>
        <InputTemperature defaultValue={"12"} />
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
