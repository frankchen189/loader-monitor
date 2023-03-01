import { useCallback } from "react";
import ReactFlow, {
  Node,
  addEdge,
  Controls,
  Background,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: `"books.csv" data lines` },
    position: { x: 250, y: 5 }
  },

  {
    id: "2",
    data: { label: `"books.csv" valid data lines` },
    position: { x: 250, y: 100 }
  },

  {
    id: "31",
    data: { label: `"Vertex Book" valid data objects` },
    position: { x: 50, y: 200 }
  },
  {
    id: "32",
    data: { label: `"Vertex Price" valid data objects` },
    position: { x: 250, y: 200 }
  },
  {
    id: "33",
    data: { label: `"Edge has" valid data objects` },
    position: { x: 450, y: 200 }
  },

  {
    id: "41",
    type: "output",
    data: { label: `"Vertex Book" data objects` },
    position: { x: 50, y: 300 }
  },
  {
    id: "42",
    type: "output",
    data: { label: `"Vertex Price" data objects` },
    position: { x: 250, y: 300 }
  },
  {
    id: "43",
    type: "output",
    data: { label: `"Edge has" data objects` },
    position: { x: 450, y: 300 }
  },
];

const markerEnd = {
    type: MarkerType.ArrowClosed,
    color: '#000000',
}

const initialEdges: Edge[] = [
  { 
    id: "e1-2", 
    source: "1", 
    target: "2", 
    markerEnd: markerEnd
  },

    { 
        id: "e2-31", 
        source: "2", 
        target: "31",
        markerEnd: markerEnd
    },
    { 
        id: "e2-32", 
        source: "2", 
        target: "32",
        markerEnd: markerEnd
    },
    { 
        id: "e3-33", 
        source: "2", 
        target: "33",
        markerEnd: markerEnd
    },

    { 
        id: "e31-41", 
        source: "31", 
        target: "41",
        markerEnd: markerEnd
    },
    { 
        id: "e32-42", 
        source: "32", 
        target: "42",
        markerEnd: markerEnd
    },
    { 
        id: "e33-43", 
        source: "33", 
        target: "43",
        markerEnd: markerEnd
    },
];

const BasicFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Edge<any> | Connection) => setEdges(
      (eds: Edge<any>[]) => addEdge(params, eds)
    ),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
        
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default BasicFlow;
