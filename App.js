import {ImageBackground, Text, View} from 'react-native';
import { style } from './App.style';
import React, {useState} from "react";
import hotBackground from "./assets/hot.png";
import {InputTemperature} from "./components/InputTemperature/InputTemperature";
import {TemperatureDisplay} from "./components/TemperatureDisplay/TemperatureDisplay";
import {DEFAULT_TEMPERATURE, DEFAULT_UNIT} from "./constant";
import {convertTemperatureTo, getOppositUnit} from "./services/temperature-service";


export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOppositUnit(currentUnit);

  function getConvertedTemperature(value, unit) {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat) ? "" : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  }

  return (
    <ImageBackground source={hotBackground} style={style.container}>
      <View style={style.workspace}>
        <TemperatureDisplay
          value={getConvertedTemperature()}
          unit={oppositeUnit}
        />
        <InputTemperature onChangeText={setInputValue} defaultValue={DEFAULT_TEMPERATURE} />
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
