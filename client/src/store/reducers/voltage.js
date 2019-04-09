import {GET_VOLTAGE_VALUES} from '../actions/constants'

const voltageReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_VOLTAGE_VALUES:
        return payload
      default:
        return state
    }
}

export default voltageReducer;
