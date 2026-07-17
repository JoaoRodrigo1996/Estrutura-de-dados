class PriorityQueue {
    constructor(size = 100) {
        this.data = new Array(size);
        this.size = 0;
    }

    enqueue(vertex, priority) {
        this.data[this.size] = {
            vertex: vertex,
            priority: priority
        };

        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        let smallest = 0;

        for (let i = 1; i < this.size; i++) {
            if (this.data[i].priority < this.data[smallest].priority) {
                smallest = i;
            }
        }

        const item = this.data[smallest];

        for (let i = smallest; i < this.size - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        this.size--;

        return item;
    }

    isEmpty() {
        return this.size === 0;
    }
}

class Graph {
  constructor(){
    this.vertices = {}
  }

  addVertex(vertex) {
    if(!this.vertices[vertex]) {
      this.vertices[vertex] = []
    }
  }

  addEdge(from, to, weight) {
    let index = this.vertices[from].length
    this.vertices[from][index] = { vertex: to, weight: weight }

    index = this.vertices[to].length

    this.vertices[to][index] = { vertex: from, weight: weight }
  }

  getNeighbors(vertex){
    return this.vertices[vertex] ?? []
  }
}

class Dijkstra {

    constructor(graph) {
        this.graph = graph;
    }

    shortestPath(start, target) {

        const distances = {};
        const previous = {};
        const visited = {};

        const queue = new PriorityQueue();

        for (const vertex in this.graph.vertices) {

            distances[vertex] = Infinity;
            previous[vertex] = null;

        }

        distances[start] = 0;

        queue.enqueue(start, 0);

        while (!queue.isEmpty()) {

            const current = queue.dequeue();

            const currentVertex = current.vertex;

            if (visited[currentVertex]) {
                continue;
            }

            visited[currentVertex] = true;

            if (currentVertex === target) {
                break;
            }

            const neighbors = this.graph.getNeighbors(currentVertex);

            for (let i = 0; i < neighbors.length; i++) {

                const neighbor = neighbors[i];

                if (visited[neighbor.vertex]) {
                    continue;
                }

                const distance =
                    distances[currentVertex] + neighbor.weight;

                if (distance < distances[neighbor.vertex]) {

                    distances[neighbor.vertex] = distance;

                    previous[neighbor.vertex] = currentVertex;

                    queue.enqueue(
                        neighbor.vertex,
                        distance
                    );

                }

            }

        }

        const path = [];

        let current = target;

        while (current !== null) {

            path[path.length] = current;

            current = previous[current];

        }

        for (
            let left = 0,
                right = path.length - 1;
            left < right;
            left++,
            right--
        ) {

            const temp = path[left];
            path[left] = path[right];
            path[right] = temp;

        }

        return {
            distance: distances[target],
            path: path,
            found: distances[target] !== Infinity  // ✨ Novo
        };

    }

}

const graph = new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "C", 1);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 8);
graph.addEdge("C", "E", 10);
graph.addEdge("D", "E", 2);

const dijkstra = new Dijkstra(graph)
const testCases = [
    { from: "A", to: "D" },
    { from: "A", to: "E" },
    { from: "B", to: "E" },
    { from: "A", to: "A" }
];

testCases.forEach(({ from, to }) => {
    try {
        const result = dijkstra.shortestPath(from, to);

        if (result.found) {
            console.log(`✅ ${from} → ${to}`);
            console.log(`   Caminho:   ${result.path.join(" → ")}`);
            console.log(`   Distância: ${result.distance}\n`);
        } else {
            console.log(`❌ ${from} → ${to}: Nenhum caminho encontrado\n`);
        }
    } catch (error) {
        console.log(`⚠️  ${from} → ${to}: ${error.message}\n`);
    }
});
