import React from 'react';
import Pin from '../Pin';

const Resistor = (props) => {
    const strokeColor = props.selected ? 'lime' : 'black';

    return (
        <g>
            <rect x="-32" y="-12" width="64" height="24" fill="white" strokeWidth="3"
                stroke={strokeColor}
                onMouseDown={props.onMouseDown}></rect>
            <line x1="-32" y1="0" x2="-48" y2="0" strokeWidth="3"
                stroke={strokeColor}></line>
            <line x1="32" y1="0" x2="48" y2="0" strokeWidth="3"
                stroke={strokeColor}></line>

            <Pin element={props.element} index={0} position={props.element.pins[0]} />
            <Pin element={props.element} index={1} position={props.element.pins[1]} />
        </g>
    );
}

export default Resistor;