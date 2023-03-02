import React, { useState } from 'react';
import { Position, getBezierPath } from 'reactflow';

import './index.css';

const foreignObjectSize = 40;

const onEdgeClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: any) => {
    evt.stopPropagation();
    alert(`remove ${id}`);
};

export default function CustomEdge(
    {
        id,
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
        style = {},
        markerEnd,
    }: {
        id: string,
        sourceX: number,
        sourceY: number,
        targetX: number,
        targetY: number,
        sourcePosition: Position,
        targetPosition: Position,
        style?: any,
        markerEnd?: string | undefined,
    }
) {
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const [isShown, setIsShown] = useState(false);

    return (
        <>
            <path
                id={id}
                style={style}
                className="react-flow__edge-path"
                d={edgePath}
                markerEnd={markerEnd}
            />
            <foreignObject
                width={foreignObjectSize}
                height={foreignObjectSize}
                x={labelX - foreignObjectSize / 2}
                y={labelY - foreignObjectSize / 2}
                className="edgebutton-foreignobject"
                requiredExtensions="http://www.w3.org/1999/xhtml"
            >
                <div>
                    <button className="edgebutton" onClick={(event) => onEdgeClick(event, id)}>
                        ?
                    </button>
                </div>
            </foreignObject>
        </>
    );
}
