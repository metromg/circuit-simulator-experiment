import React from 'react';
import { connect } from 'react-redux';
import EditorElement from './EditorElement';
import EditorNode from './EditorNode';

const Editor = (props) => (
    <svg style={{position: 'absolute', left: '0', right: '0', width: '100%', height: '100%'}}>
        {props.circuitElements.map(element => (
            <EditorElement key={element.id} element={element} />
        ))}
        {props.circuitNodes.map(node => (
            <EditorNode key={node.id} node={node} />
        ))}
    </svg>
);

const mapStateToProps = state => ({
    circuitElements: Object.values(state.circuitElements),
    circuitNodes: Object.values(state.circuitNodes)
});

export default connect(mapStateToProps)(Editor);
