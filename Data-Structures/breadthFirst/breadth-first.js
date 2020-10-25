'use strict';
/* eslint-disable no-unused-vars */
'use strect';
class Vertex {
  constructor(value){
    this.value = value;

  }
}

class Edge{
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph{
  constructor(){
    this._adgencyList = new Map();
    this.size = 0;
  }

  addNode(vertex){
    this._adgencyList.set(vertex,[]);
    this.size++;
    return vertex;
  }
  addEdge(startVertex,endVertex,wieght = 0){
    if(!this._adgencyList.has(startVertex) || !this._adgencyList.has(endVertex)){
      return;
    }
    const adgen = this._adgencyList.get(startVertex);
    adgen.push(new Edge(endVertex,wieght));
  }
  getNodes(){
    let set = new Set();
    for (const [key, value] of this._adgencyList.entries()){
      set.add(key);
    }
    return set;
  }
  getNeighbors(vertex){
    if(this._adgencyList.has(vertex)){
      return this._adgencyList.get(vertex);
    }
    return 'error';
  }
  Size(){
    return this.size;
  }
  breadthFirst(startVertex) {

    if (!startVertex) { return 'Vertex Required'; }

    if (this.size === 0) return 'Empty Graph';

    const queue = [];
    const vistedNodes = new Set();

    queue.push(startVertex);
    vistedNodes.add(startVertex);

    while (queue.length) {
      let currentVertex = queue.shift();

      let neighbors = this.getNeighbors(currentVertex);

      for (let neighbor of neighbors) {
        const neighborVertex = neighbor.vertex;

        if (vistedNodes.has(neighborVertex)) {
          continue;
        } else {
          vistedNodes.add(neighborVertex);
        }

        queue.push(neighborVertex);
      }
    }
    return vistedNodes;
  }


}

// class BreadthFirst extends Graph {

//   bfs(startNode) {
//     const queue = [];
//     const vistedNodes = new Set();

//     queue.push(startNode);
//     vistedNodes.add(startNode);

//     while (queue.length) {
//       const currentNode = queue.shift();

//       const neighbors = this.getNeighbors(currentNode);

//       for (let neighbor of neighbors) {
//         const neighborNode = neighbor.vertex;
//         if(vistedNodes.has(neighborNode)) {
//           continue;
//         } else {
//           vistedNodes.add(neighborNode);
//         }
//         queue.push(neighborNode);
//       }

//     }

//     return vistedNodes;
//   }

// }

module.exports = { Vertex, Edge, Graph };
