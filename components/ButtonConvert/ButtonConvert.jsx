import {style} from "./ButtonConvert.style";
import {Text, TouchableOpacity} from "react-native";

export function ButtonConvert(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={style.button}>
      <Text style={style.text}>Convert to {props.unit}</Text>
    </TouchableOpacity>
  );
}
