import {style} from "./TemperatureDisplay.style";
import {Text} from "react-native";

export function TemperatureDisplay(props) {
  return (
    <Text style={style.text}>
      {props.value} {props.unit}
    </Text>
  );
}
