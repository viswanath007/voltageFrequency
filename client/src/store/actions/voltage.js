import {GET_VOLTAGE_VALUES} from './constants';
import queryString from "query-string";

export const getVoltageValues = () => async dispatch => {
  const query = queryString.parse(window.location.search);
  const {tagName, tagValue} = query;
  const data = await fetch(`http://localhost:5000/?tagName=${tagName}&tagValue=${tagValue}`)
  .then((res) => res.json())
  .then((data) => data)
  .catch(err => console.error(err));

  // console.log(data);
  return dispatch({ type: GET_VOLTAGE_VALUES, payload: data || [] });
}
