import React from 'react';
import Pin from '../Pin';

const VoltageSource = (props) => {
    const strokeColor = props.selected ? 'lime' : 'black';

    return (
        <g>
            <circle cx="0" cy="0" r="24" fill="white" strokeWidth="3"
                stroke={strokeColor}
                onMouseDown={props.onMouseDown}></circle>
            <line x1="-24" y1="0" x2="-48" y2="0" strokeWidth="3"
                stroke={strokeColor}></line>
            <line x1="24" y1="0" x2="48" y2="0" strokeWidth="3"
                stroke={strokeColor}></line>
            
            <Pin element={props.element} index={0} position={props.element.pins[0]} />
            <Pin element={props.element} index={1} position={props.element.pins[1]} />
        </g>
    );
}

export default VoltageSource;