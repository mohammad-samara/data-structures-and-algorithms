'use strict';

// eslint-disable-next-line no-unused-vars
const { Vertex, Edge, Graph } = require('../depth-first.js');

// define vertice values

let v1 = new Vertex('Arendelle');
let v2 = new Vertex('New Monstropolis');
let v3 = new Vertex('Naboo');
let v4 = new Vertex('Jordan');

let graph = new Graph();
graph .addNode(v1);
graph .addNode(v2);
graph .addNode(v3);
graph .addNode(v4);

graph .addEdge(v1 ,v2,10);
graph .addEdge(v1 ,v4),20;
graph .addEdge(v2 ,v3,12);

describe('depthFirstTraversalOrder() tests', () => {

  it('will return Vertexes array with depth-first order', () => {

    const expected = ['Arendelle', 'New Monstropolis', 'Naboo', 'Jordan'];

    expect(graph.depthFirstTraversalOrder()).toEqual(expected);

  });

  it('will return Graph Empty if the graph is empty', () => {

    const emptyGraph = new Graph();

    const actual = emptyGraph.depthFirstTraversalOrder();
    const expected = 'Empty Graph';

    expect(actual).toBe(expected);

  });

});
