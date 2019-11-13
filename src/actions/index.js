import { days } from "../containers/app";
export function fetchData(day) {
  return async dispatch => {
    dispatch({ type: "LOAD_DATA_START", day });
    const response = await fetch(`https://api.iev.aero/api/flights/${day}`);
    const data = (await response.json()).body; // Ніяк не обробляється якщо апішка повернула помилку
    dispatch({ type: "LOAD_DATA_END", payload: { data, day } });
  };
}

export function setShift(shift) {
  return async dispatch => {
    dispatch({ type: "SET_SHIFT", shift });
  };
}





