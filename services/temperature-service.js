import {UNITS} from "../constant";

export function getOppositUnit(unit) {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}


export function convertTemperatureTo(unit, value) {
  if (unit === UNITS.celcius) {
    return (value - 32) * 1.8;
  } else {
    return value * 1.8 + 32;
  }
}


export function isIceTemperature(value, unit) {
  if (unit === UNITS.celcius) {
    return value <= 0;
  } else {
    return value <= 32;
  }
}
