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
}

module.exports = Graph;
