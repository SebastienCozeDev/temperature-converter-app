import {ImageBackground, Text, View} from 'react-native';
import { style } from './App.style';
import React, {useState, useEffect} from "react";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import {InputTemperature} from "./components/InputTemperature/InputTemperature";
import {TemperatureDisplay} from "./components/TemperatureDisplay/TemperatureDisplay";
import {DEFAULT_TEMPERATURE, DEFAULT_UNIT} from "./constant";
import {convertTemperatureTo, getOppositUnit, isIceTemperature} from "./services/temperature-service";
import {ButtonConvert} from "./components/ButtonConvert/ButtonConvert";


/**
 * App component.
 *
 * @return {JSX.Element} - Rendered component.
 *
 * @constructor
 */
export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackground, setCurrentBackground] = useState();
  const oppositeUnit = getOppositUnit(currentUnit);

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isColdBackground ? coldBackground : hotBackground);
    }
  }, [inputValue, currentUnit]);

  /**
   * Get the converted temperature.
   *
   * @param value {string} - The temperature value.
   * @param unit {string} - The unit of the temperature.
   *
   * @return {string} - The converted temperature.
   */
  function getConvertedTemperature(value, unit) {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat) ? "" : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  }

  return (
    <ImageBackground source={currentBackground} style={style.container}>
      <View style={style.workspace}>
        <TemperatureDisplay
          value={getConvertedTemperature()}
          unit={oppositeUnit}
        />
        <InputTemperature
          onChangeText={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
          unit={currentUnit}
        />
        <View>
          <ButtonConvert
            onPress={() => {
              setCurrentUnit(oppositeUnit);
            }}
            unit={currentUnit}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
