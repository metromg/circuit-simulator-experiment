export const MOVE_ELEMENT = 'MOVE_ELEMENT';

export const moveElement = (id, position) => ({
    type: MOVE_ELEMENT,
    id,
    position
});