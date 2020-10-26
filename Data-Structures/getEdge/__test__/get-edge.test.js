'use strict';

// eslint-disable-next-line no-unused-vars
const {Vertex, Edge, Graph, fullTripIsPossible} = require('../get-edge');

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
graph .addEdge(v1 ,v4,20);
graph .addEdge(v2 ,v3,12);


describe('fullTripIsPossible()', ()=> {

  it('returns true and the total cost if there is a path', ()=> {
    expect(fullTripIsPossible (graph, ['Arendelle','New Monstropolis','Naboo'])).toEqual('True, 22$');
  });
  it('returns false and the if there is no path', ()=> {
    expect(fullTripIsPossible (graph, ['Arendelle','Naboo'])).toEqual('False, 0$');
  });

  it('notifies the user if he entered one or no city', ()=> {
    expect(fullTripIsPossible (graph, ['Arendelle'])).toEqual('you must specify at least two cities');
  });

});
