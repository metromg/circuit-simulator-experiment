import { MOVE_ELEMENT, ROTATE_ELEMENT, CHANGE_ELEMENT_SELECTION, SELECT_PIN } from '../actions/circuitElements';
import { GRID_SIZE } from '../constants';

const INITIAL = {
    0: {
        id: 0,
        type: 'VoltageSource',
        properties: {
            voltage: 5
        },
        transform: {
            position: { x: 64, y: 64 },
            rotation: 0
        },
        pins: [
            { x: -48, y: 0 },
            { x: 48, y: 0 }
        ],
        bounds: {
            top: 32, bottom: 32,
            left: 64, right: 64
        }
    },
    1: {
        id: 1,
        type: 'Resistor',
        properties: {
            resistance: 200
        },
        transform: {
            position: { x: 256, y: 256 },
            rotation: 0
        },
        pins: [
            { x: -48, y: 0 },
            { x: 48, y: 0 }
        ],
        bounds: {
            top: 32, bottom: 32,
            left: 64, right: 64
        }
    }
}

function snapToGrid({ x, y }) {
    const snap = (val) => Math.ceil(val / GRID_SIZE) * GRID_SIZE;

    return { x: snap(x), y: snap(y) };
}

const moveElement = (state, action) => {
    const { id, position } = action;
    const element = state[id];

    return {
        ...state, 
        [id]: {
            ...element,
            transform: {
                ...element.transform,
                position: snapToGrid(position)
            }
        }
    };
}

const rotateElement = (state, action) => {
    const { id } = action;
    const element = state[id];

    let rotation = element.transform.rotation += 90;
    if (rotation >= 360) {
        rotation = 0;
    }

    return {
        ...state,
        [id]: {
            ...element,
            transform: {
                ...element.transform,
                rotation
            }
        }
    };
}

export const circuitElements = (state = INITIAL, action) => {
    switch (action.type) {
        case MOVE_ELEMENT:
            return moveElement(state, action);
        case ROTATE_ELEMENT:
            return rotateElement(state, action);
        default:
            return state;
    }
}

export const selectedCircuitElement = (state = null, action) => {
    switch (action.type) {
        case CHANGE_ELEMENT_SELECTION:
            return action.id;
        default:
            return state;
    }
}

export const selectedCircuitElementPin = (state = null, action) => {
    switch (action.type) {
        case SELECT_PIN:
            return { element: action.id, pinIndex: action.pinIndex };
        default:
            return state;
    }
}