import { MOVE_ELEMENT, CHANGE_ELEMENT_SELECTION } from '../actions/circuitElements';
import { GRID_SIZE } from '../constants';

const INITIAL = {
    0: {
        id: 0,
        type: 'Resistor',
        properties: {
            resistance: 100
        },
        transform: {
            position: { x: 100, y: 100 },
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
            position: { x: 200, y: 100 },
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

export const circuitElements = (state = INITIAL, action) => {
    switch (action.type) {
        case MOVE_ELEMENT:
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