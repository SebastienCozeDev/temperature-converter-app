import {style} from "./TemperatureDisplay.style";
import {Text} from "react-native";

/**
 * TemperatureDisplay component.
 *
 * @param props {object} - Component props.
 *
 * @return {JSX.Element} - Rendered component.
 *
 * @constructor
 */
export function TemperatureDisplay(props) {
  return (
    <Text style={style.text}>
      {props.value} {props.unit}
    </Text>
  );
}
