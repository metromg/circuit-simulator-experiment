export const MOVE_ELEMENT = 'MOVE_ELEMENT';
export const ROTATE_ELEMENT = 'ROTATE_ELEMENT';
export const CHANGE_ELEMENT_SELECTION = 'CHANGE_ELEMENT_SELECTION';

export const SELECT_PIN = 'SELECT_PIN';
export const CONNECT_PINS = 'CONNECT_PINS';

export const moveElement = (id, position) => ({
    type: MOVE_ELEMENT,
    id,
    position
});

export const rotateElement = (id) => ({
    type: ROTATE_ELEMENT,
    id
});

export const changeElementSelection = (id) => ({
    type: CHANGE_ELEMENT_SELECTION,
    id
});

const selectPin = (id, pinIndex) => ({
    type: SELECT_PIN,
    id, pinIndex
});

const connectPins = (id1, pinIndex1, id2, pinIndex2) => ({
    type: CONNECT_PINS,
    id1, pinIndex1,
    id2, pinIndex2
});

export const changePinSelectionAndConnect = (id, pinIndex) => (dispatch, getState) => {
    if (id == null || pinIndex == null) {
        dispatch(selectPin(null, null));
        return;
    }

    const { selectedCircuitElementPin } = getState();
    if (selectedCircuitElementPin == null || selectedCircuitElementPin.element == null || selectedCircuitElementPin.pinIndex == null) {
        dispatch(selectPin(id, pinIndex));
    } else {
        dispatch(connectPins(selectedCircuitElementPin.element, selectedCircuitElementPin.pinIndex, id, pinIndex));
        dispatch(selectPin(null, null));
    }
};