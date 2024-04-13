import {ImageBackground, Text, View} from 'react-native';
import { style } from './App.style';
import React, {useState} from "react";
import hotBackground from "./assets/hot.png";
import {InputTemperature} from "./components/InputTemperature/InputTemperature";
import {TemperatureDisplay} from "./components/TemperatureDisplay/TemperatureDisplay";
import {DEFAULT_TEMPERATURE, DEFAULT_UNIT} from "./constant";


export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);

  return (
    <ImageBackground source={hotBackground} style={style.container}>
      <View style={style.workspace}>
        <TemperatureDisplay value={inputValue} unit={currentUnit} />
        <InputTemperature onChangeText={setInputValue} defaultValue={DEFAULT_TEMPERATURE} />
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
