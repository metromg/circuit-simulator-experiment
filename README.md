The Circuit Simulator
=====================

Redux Store Layout
{
    circuitElements: {
        0: {
            type: 'Ground',
            properties {},
            transform: {
                position: { x: 0, y: 100 },
                rotation: 0
            }
        },
        1: {
            type: 'VoltageSource',
            properties: {
                voltage: 5
            },
            transform: {
                position: { x: 0, y: 0 },
                rotation: 0
            }
        },
        2: {
            type: 'Resistor',
            properties: {
                resistance: 100
            },
            transform: {
                position: { x: 50, y: 0 },
                rotation: 0
            }
        },
        3: {
            type: 'Resistor',
            properties: {
                resistance: 100
            },
            transform: {
                position: { x: 100, y: 0 },
                rotation: 0
            }
        },
        4: {
            type: 'Resistor',
            properties: {
                resistance: 100
            },
            transform: {
                position: { x: 200, y: 0 },
                rotation: 0
            }
        }
    },
    selectedCircuitElement: 0,
    circuitNodes: {
        0: {
            elements: [0, 1]
        },
        1: {
            elements: [1, 2]
        },
        2: {
            elements: [2, 3, 4]
        }
        3: {
            elements: [3, 4, 0]
        }
    },
    addingCircuitNode: {
        elements: []
    },
    selectedCircuitNode: 0
}