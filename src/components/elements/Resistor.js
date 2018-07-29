import React from 'react';

const Resistor = (props) => (
    <g onMouseDown={props.onMouseDown}>
        <text>{props.element.type} {props.element.id}</text>
    </g>
)

export default Resistor;