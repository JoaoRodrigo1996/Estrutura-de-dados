import { Queue } from './queue.js'

class Graph {
  constructor(){
    this.vertices = {}
  }

  addVertex(vertex){
    if(!this.vertices[vertex]){
      this.vertices[vertex] = []
    }
  }

  addEdge(vertex1, vertex2){
    let index = this.vertices[vertex1].length
    this.vertices[vertex1][index] = vertex2

    index = this.vertices[vertex2].length
    this.vertices[vertex2][index] = vertex1
  }
}

class BFS {
  constructor(graph){
    this.graph = graph
  }

  search(start, target){
    const queue = new Queue()
    const visited = {}
    const traversal = []
    let traversalIndex = 0

    if(start === target){
      return [start]
    }

    visited[start] = true
    queue.enqueue(start)

    while(!queue.isEmpty()){
      const vertex = queue.dequeue()
      traversal[traversalIndex] = vertex
      traversalIndex++

      if(vertex === target){
        return traversal
      }

      const neighbors = this.graph.vertices[vertex] ?? []

      for(let i = 0; i < neighbors.length; i++){
        const neighbor = neighbors[i]

        if(!visited[neighbor]){
          visited[neighbor] = true
          queue.enqueue(neighbor)
        }
      }
    }
    return traversal
  }
}

const graph = new Graph()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("C", "G");

const bfs = new BFS(graph)
console.log(bfs.search("A", "Z"))
