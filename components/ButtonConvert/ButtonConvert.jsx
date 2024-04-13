import {style} from "./ButtonConvert.style";
import {Text, TouchableOpacity} from "react-native";

/**
 * ButtonConvert component.
 *
 * @param props {object} - Component props.
 *
 * @return {JSX.Element} - Rendered component.
 * 
 * @constructor
 */
export function ButtonConvert(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={style.button}>
      <Text style={style.text}>Convert to {props.unit}</Text>
    </TouchableOpacity>
  );
}
