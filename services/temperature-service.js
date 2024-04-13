import {UNITS} from "../constant";


/**
 * Get the opposite unit of the given unit.
 *
 * @param unit {string} - The unit.
 *
 * @return {string} - The opposite unit.
 */
export function getOppositUnit(unit) {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}


/**
 * Convert the given temperature to the opposite unit.
 *
 * @param unit {string} - The unit of the given value.
 * @param value {number} - The temperature value.
 *
 * @return {number} - The converted temperature value.
 */
export function convertTemperatureTo(unit, value) {
  if (unit === UNITS.celcius) {
    return (value - 32) / 1.8;
  } else {
    return value * 1.8 + 32;
  }
}


/**
 * Check if the given value is an ice temperature.
 *
 * @param value {number} - The temperature value.
 * @param unit {string} - The unit of the temperature.
 *
 * @return {boolean} - True if the value is an ice temperature, false otherwise.
 */
export function isIceTemperature(value, unit) {
  if (unit === UNITS.celcius) {
    return value <= 0;
  } else {
    return value <= 32;
  }
}
