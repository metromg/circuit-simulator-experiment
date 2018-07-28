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
                rotation: 0,
            },
            pins: [
                { x: 0, y: 0 },
            ],
            bounds: {
                top: 64, bottom: 64,
                left: 64, right: 64
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
            },
            pins: [
                { x: 0, y: 64 },
                { x: 0, y: -64 }
            ],
            bounds: {
                top: 64, bottom: 64,
                left: 64, right: 64
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
            },
            pins: [
                { x: 0, y: 64 },
                { x: 0, y: -64 }
            ],
            bounds: {
                top: 64, bottom: 64,
                left: 64, right: 64
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
            },
            pins: [
                { x: 0, y: 64 },
                { x: 0, y: -64 }
            ],
            bounds: {
                top: 64, bottom: 64,
                left: 64, right: 64
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
            },
            pins: [
                { x: 0, y: 64 },
                { x: 0, y: -64 }
            ],
            bounds: {
                top: 64, bottom: 64,
                left: 64, right: 64
            }
        }
    },
    selectedCircuitElement: 0,
    selectedCircuitElementPin: {
        element: 0, pinIndex: 0
    },
    circuitNodes: {
        0: {
            elements: [
                { element: 0, pinIndex: 0 },
                { element: 1, pinIndex: 0 }
            ]
        },
        1: {
            elements: [
                { elememt: 1, pinIndex: 1 },
                { element: 2, pinIndex: 0 }
            ]
        },
        2: {
            elements: [
                { element: 2, pinIndex: 1 },
                { element: 3, pinIndex: 0 },
                { element: 4, pinIndex: 0 }
            ]
        }
        3: {
            elements: [
                { element: 3, pinIndex: 1 },
                { element: 4, pinIndex: 1 },
                { element: 0, pinIndex: 0 }
            ]
        }
    },
    selectedCircuitNode: 0
}