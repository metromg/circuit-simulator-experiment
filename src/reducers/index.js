import { combineReducers } from 'redux';
import { circuitElements, selectedCircuitElement } from './circuitElements';

export default combineReducers({
    circuitElements,
    selectedCircuitElement
});