import { MOVE_ELEMENT } from '../actions/circuitElements';

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

const circuitElements = (state = INITIAL, action) => {
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
                        position
                    }
                }
            };
        default:
            return state;
    }
}

export default circuitElements;