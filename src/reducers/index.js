import { combineReducers } from 'redux';
import { circuitElements, selectedCircuitElement, selectedCircuitElementPin } from './circuitElements';
import { circuitNodes } from './circuitNodes';

export default combineReducers({
    circuitElements,
    selectedCircuitElement,
    selectedCircuitElementPin,
    circuitNodes
});