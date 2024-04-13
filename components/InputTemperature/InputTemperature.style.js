import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 50,
    paddingLeft: 25,
    paddingRight: 25,
  },
  unit: {
    position: "absolute",
    fontSize: 35,
    alignSelf: "flex-end",
    paddingRight: 25,
  }
});