'use strict';

// eslint-disable-next-line no-unused-vars
const { Vertex, Edge, Graph } = require('../breadth-first.js');

// define vertice values

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);

const graph = new Graph();
graph.addNode(ten);
graph.addNode(two);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(three);
graph.addNode(eight);

graph.addEdge(ten, two);
graph.addEdge(ten, six);
graph.addEdge(ten, three);
graph.addEdge(two, seven);
graph.addEdge(six, seven);
graph.addEdge(six, eight);
graph.addEdge(three, eight);
graph.addEdge(eight, seven);

describe('breadthFirst() tests', () => {

  it('will return Vertex Required if no vertex passed', () => {
    const neighbors = new Graph();
    neighbors.addNode(ten);
    neighbors.addNode(six);
    neighbors.addNode(three);

    const actual = neighbors.breadthFirst();
    const expected = 'Vertex Required';

    expect(actual).toEqual(expected);

  });

  it('will return Graph Empty if ther are no Vertex', () => {

    const emptyGraph = new Graph();

    const actual = emptyGraph.breadthFirst(ten);
    const expected = 'Empty Graph';

    expect(actual).toBe(expected);

  });

  it('will return the vertice of the graph', () => {
    const actual = graph.breadthFirst(ten);
    const expectedBFS = new Set();

    expectedBFS.add(ten).add(two).add(six).add(three).add(seven).add(eight);

    expect(actual).toEqual(expectedBFS);

  });
});
