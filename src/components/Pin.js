import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePinSelectionAndConnect } from '../actions/circuitElements';

class Pin extends Component {
    constructor(props) {
        super(props);
        this.handleMouseDownOnPin = this.handleMouseDownOnPin.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);

        this.shouldDeselect = true;
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleMouseDown);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleMouseDown);
    }

    handleMouseDownOnPin() {
        this.shouldDeselect = false;

        if (this.props.selected === false) {
            this.props.onSelect(this.props.element.id, this.props.index);
        }
    }

    handleMouseDown() {
        if (this.shouldDeselect === true && this.props.selected === true) {
            this.props.onDeselect();
        }

        this.shouldDeselect = true;
    }

    render() {
        return (
            <circle cx={this.props.position.x} cy={this.props.position.y} r="6"
                stroke={this.props.selected ? 'lime' : 'white'} strokeWidth="3"
                onMouseDown={this.handleMouseDownOnPin}></circle>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    selected: state.selectedCircuitElementPin != null 
        && state.selectedCircuitElementPin.element === ownProps.element.id
        && state.selectedCircuitElementPin.pinIndex === ownProps.index
});

const mapDispatchToProps = dispatch => ({
    onSelect: (elementId, pinIndex) => dispatch(changePinSelectionAndConnect(elementId, pinIndex)),
    onDeselect: () => dispatch(changePinSelectionAndConnect(null, null))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pin);