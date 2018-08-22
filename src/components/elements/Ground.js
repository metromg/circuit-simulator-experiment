import React from 'react';
import Pin from '../Pin';

const Ground = (props) => {
    const strokeColor = props.selected ? 'lime' : 'black';

    return (
        <g onMouseDown={props.onMouseDown}>
            <line x1="0" y1="-16" x2="0" y2="16" strokeWidth="3"
                stroke={strokeColor}></line>

            <line x1="16" y1="0" x2="-16" y2="0" strokeWidth="3"
                stroke={strokeColor}></line>
            <line x1="8" y1="6" x2="-8" y2="6" strokeWidth="3"
                stroke={strokeColor}></line>
            <line x1="4" y1="12" x2="-4" y2="12" strokeWidth="3"
                stroke={strokeColor}></line>

            <Pin element={props.element} index={0} position={props.element.pins[0]} />
        </g>
    );
}

export default Ground;