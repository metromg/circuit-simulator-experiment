import { CONNECT_PINS } from '../actions/circuitElements';

// TODO: Check if the exact node connection already exists (independant of elements order)
const addNodeWithElements = (state, elements) => {
    const maxNodeId = Math.max(...[...Object.keys(state), 0]);
    const newNodeId = maxNodeId + 1;

    return {
        ...state,
        [newNodeId]: {
            id: newNodeId,
            elements
        }
    };
}

export const circuitNodes = (state = {}, action) => {
    switch (action.type) {
        case CONNECT_PINS:
            return addNodeWithElements(state, [
                { element: action.id1, pinIndex: action.pinIndex1 },
                { element: action.id2, pinIndex: action.pinIndex2 }
            ]);
        default:
            return state;
    }
}