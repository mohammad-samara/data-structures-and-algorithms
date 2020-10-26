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
  //35
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
  breadthFirstTraversal(){
    let firstNode = this._adgencyList.entries().next().value;
    let arr = [firstNode[0].value];
    let arrNodes = this._adgencyList.get(firstNode[0]);
    while(arrNodes && arrNodes.length){
      var inArr = [];
      for(let i = 0 ; i < arrNodes.length ;i++){
        arr.push(arrNodes[i].vertex.value);
        inArr = inArr.concat(this._adgencyList.get(arrNodes[i].vertex));
      }
      arrNodes = inArr.slice();
    }
    return arr;
  }

  checkIfNeighbor(start,end){
    let flagArr = [false,0];
    for (const [key, value] of this._adgencyList.entries()){
      if(key.value === start){
        let j = 0;
        while(!flagArr[0] && j < value.length){
          if(value[j].vertex.value === end){
            flagArr[0] = true;
            flagArr[1] += value[j].weight;
          }
          j++;
        }
      }
    }
    return flagArr;
  }

}

function fullTripIsPossible (graph, arr){
  if(arr.length<2){return 'you must specify at least two cities'}
  let totalWieght = 0;
  for(let i = 0 ; i < arr.length -1 ; i++){
    let checkIfNeighbor = graph.checkIfNeighbor(arr[i],arr[i+1]);
    if(!checkIfNeighbor[0])return'False, 0$';
    totalWieght+= checkIfNeighbor[1];
  }
  return `True, ${totalWieght}$`;
}

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
console.log(fullTripIsPossible (graph, ['Arendelle','New Monstropolis','Naboo']));
console.log(fullTripIsPossible (graph, ['Arendelle','Naboo']));
module.exports = {Vertex, Edge, Graph, fullTripIsPossible}
