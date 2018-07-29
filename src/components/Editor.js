import React from 'react';
import { connect } from 'react-redux';
import EditorElement from './EditorElement';

const Editor = (props) => (
    <svg style={{position: 'absolute', left: '0', right: '0', width: '100%', height: '100%'}}>
        {props.circuitElements.map(element => (
            <EditorElement key={element.id} element={element} />
        ))}
    </svg>
);

const mapStateToProps = state => ({
    circuitElements: Object.values(state.circuitElements)
});

export default connect(mapStateToProps)(Editor);
