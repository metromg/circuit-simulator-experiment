export const MOVE_ELEMENT = 'MOVE_ELEMENT';
export const CHANGE_ELEMENT_SELECTION = 'CHANGE_ELEMENT_SELECTION';

export const moveElement = (id, position) => ({
    type: MOVE_ELEMENT,
    id,
    position
});

export const changeElementSelection = (id) => ({
    type: CHANGE_ELEMENT_SELECTION,
    id
});