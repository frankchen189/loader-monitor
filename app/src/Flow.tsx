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

import ButtonEdge from './ButtonEdge';

import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  // Step 1
  {
    id: 's1',
    data: { label: 'Step 1. Data lines' },
    position: { x: 50, y: -50 },
    style: {
      backgroundColor: 'rgba(236, 230, 25, 0.1)',
      width: 700,
      height: 100
    },
  },
  {
    id: "1",
    type: "input",
    data: { label: `books.csv` },
    position: { x: 250, y: 5 }
  },

  // Step 2
  {
    id: 's2',
    data: { label: 'Step 2. Valid data lines' },
    position: { x: 50, y: 50 },
    style: {
      backgroundColor: 'rgba(25, 236, 25, 0.1)',
      width: 700,
      height: 100
    },
  },
  {
    id: "2",
    data: { label: `books.csv` },
    position: { x: 250, y: 100 }
  },

  // Step 3
  {
    id: 's3',
    data: { label: 'Step 3. Valid data objects' },
    position: { x: 50, y: 150 },
    style: {
      backgroundColor: 'rgba(25, 93, 236, 0.1)',
      width: 700,
      height: 100
    },
  },
  {
    id: "31",
    data: { label: `Vertex "Book"` },
    position: { x: 50, y: 200 }
  },
  {
    id: "32",
    data: { label: `Vertex "Price"` },
    position: { x: 250, y: 200 }
  },
  {
    id: "33",
    data: { label: `Edge "has"` },
    position: { x: 450, y: 200 }
  },

  // {
  //   id: "41",
  //   type: "output",
  //   data: { label: `"Vertex Book" data objects` },
  //   position: { x: 50, y: 300 }
  // },
  // {
  //   id: "42",
  //   type: "output",
  //   data: { label: `"Vertex Price" data objects` },
  //   position: { x: 250, y: 300 }
  // },
  // {
  //   id: "43",
  //   type: "output",
  //   data: { label: `"Edge has" data objects` },
  //   position: { x: 450, y: 300 }
  // },
];

const edgeSettings = {
  type: 'buttonedge',
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: '#000000',
  },
}

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    ...edgeSettings
  },

  {
    id: "e2-31",
    source: "2",
    target: "31",
    ...edgeSettings
  },
  {
    id: "e2-32",
    source: "2",
    target: "32",
    ...edgeSettings
  },
  {
    id: "e3-33",
    source: "2",
    target: "33",
    ...edgeSettings
  },

  // { 
  //     id: "e31-41", 
  //     source: "31", 
  //     target: "41",
  //     ...edgeSettings
  // },
  // { 
  //     id: "e32-42", 
  //     source: "32", 
  //     target: "42",
  //     ...edgeSettings
  // },
  // { 
  //     id: "e33-43", 
  //     source: "33", 
  //     target: "43",
  //     ...edgeSettings
  // },
];

const edgeTypes = {
  buttonedge: ButtonEdge,
};

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
      edgeTypes={edgeTypes}
      fitView
    >

      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default BasicFlow;
