const degreesToRadians = (degrees) => degrees * Math.PI / 180;

export const applyPositionTransform = (position, transformPosition) => {
    const { x, y } = position;
    
    return { 
        x: x + transformPosition.x,
        y: y + transformPosition.y
    };
}

export const applyRotationTransform = (position, transformRotation, origin) => {
    let { x, y } = { ...position };
    const sin = Math.sin(degreesToRadians(transformRotation));
    const cos = Math.cos(degreesToRadians(transformRotation));

    // translate point back to origin
    x -= origin.x;
    y -= origin.y;

    // apply rotation
    const newX = x * cos - y * sin;
    const newY = x * sin + y * cos;

    // translate point back
    return {
        x: newX + origin.x,
        y: newY + origin.y
    };
}

export const getPathPositions = (targetPositions) => {
    const pathPositions = [];

    for (let targetPosition of targetPositions) {
        pathPositions.push(targetPosition);

        const index = targetPositions.indexOf(targetPosition);

        const isLastTargetPosition = index === targetPositions.length - 1;
        if (isLastTargetPosition) {
            continue;
        }

        const nextHorizontalPosition = {
            x: targetPositions[index + 1].x,
            y: targetPosition.y
        };

        pathPositions.push(nextHorizontalPosition);
    }

    return pathPositions;
}