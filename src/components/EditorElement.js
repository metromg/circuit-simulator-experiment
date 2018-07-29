import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveElement } from '../actions/circuitElements';
import Resistor from './elements/Resistor';

const CircuitElements = {
    Resistor
}

class EditorElement extends Component {
    constructor(props) {
        super(props);
        this.handleMouseDownOnElement = this.handleMouseDownOnElement.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);

        this.dragging = false;
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleMouseDown);
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleMouseDown);
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    }

    handleMouseDownOnElement() {
        this.dragging = true;
    }

    handleMouseDown() {
    }

    handleMouseMove(e) {
        if (this.dragging === true) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            this.props.onDrag(this.props.element.id, mouseX, mouseY);
        }
    }

    handleMouseUp() {
        this.dragging = false;
    }

    render() {
        const translate = `translate(${this.props.element.transform.position.x} ${this.props.element.transform.position.y})`;
        const rotate = `rotate(${this.props.element.transform.rotation})`;
        const transform = `${translate} ${rotate}`;

        const CircuitElementByType = CircuitElements[this.props.element.type];
        if (CircuitElementByType == null) {
            throw new Error(`The circuit element of type '${this.props.element.type}' was not found.`);
        }

        return (
            <g transform={transform}>
                <CircuitElementByType element={this.props.element} onMouseDown={this.handleMouseDownOnElement} />
            </g>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onDrag: (id, x, y) => dispatch(moveElement(id, { x, y }))
});

export default connect(null, mapDispatchToProps)(EditorElement);