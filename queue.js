class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(item) {
    const node = new Node(item)
    if (this.tail != null) {
      this.tail.next = node
    }

    this.tail = node

    if (this.isEmpty()) {
      this.head = node
    }
  }

  dequeue() {
    const item = this.head.data
    this.head = this.head.next

    if (this.isEmpty() === 0) {
      this.tail = null
    }

    return item
  }

  peek() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }

    return this.head.data
  }

  isEmpty() {
    return this.head === null
  }
}

const queue = new Queue()

console.log(queue)
queue.enqueue(10)
queue.enqueue(5)
queue.enqueue(2)
console.log(queue)
queue.enqueue(7)
console.log(queue)
queue.dequeue()
queue.dequeue()
console.log(queue)
