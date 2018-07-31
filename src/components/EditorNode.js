import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applyPositionTransform, applyRotationTransform, getPathPositions } from '../utils/paths';

class EditorNode extends Component {
    constructor(props) {
        super(props);

        this.state = this.calculateStateWithProps(props);
    }

    componentWillReceiveProps(nextProps) {
        const state = this.calculateStateWithProps(nextProps);
        this.setState(state);
    }

    calculateStateWithProps(props) {
        const targetPositions = props.node.elements
            .map(e => ({ 
                element: props.circuitElementProvider(e.element),
                pinIndex: e.pinIndex
            }))
            .map(({ element, pinIndex }) => {
                const pinPosition = element.pins[pinIndex];
                const translatedPinPosition = applyPositionTransform(pinPosition, element.transform.position);

                const rotationOrigin = {
                    x: translatedPinPosition.x - pinPosition.x,
                    y: translatedPinPosition.y - pinPosition.y
                };

                return applyRotationTransform(translatedPinPosition, element.transform.rotation, rotationOrigin);
            });

        return {
            targetPositions: [...targetPositions]
        };
    }

    render() {
        const [head, ...tail] = getPathPositions(this.state.targetPositions);
        const path = tail.reduce((acc, next) => acc + ` L ${next.x} ${next.y}`, `M ${head.x} ${head.y}`)

        return (
            <path d={path} fill="transparent" stroke="black" strokeWidth="3" />
        );
    }
}

const mapStateToProps = state => ({
    circuitElementProvider: elementId => state.circuitElements[elementId]
});

export default connect(mapStateToProps)(EditorNode);