import { style } from "./InputTemperature.style";
import {Text, TextInput, View} from "react-native";

/**
 * InputTemperature component.
 *
 * @param props {object} - Component props.
 *
 * @return {JSX.Element} - Rendered component.
 *
 * @constructor
 */
export function InputTemperature(props) {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Enter a temperature"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={props.defaultValue}
        onChangeText={props.onChangeText}
      />
      <Text style={style.unit}>{props.unit}</Text>
    </View>
  );
}