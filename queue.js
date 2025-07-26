class Queue {
  constructor() {
    this.items = []
    this.head = 0
    this.tail = 0
  }

  enqueue(item) {
    this.items[this.tail] = item
    this.tail++
  }

  dequeue() {
    if (this.isEmpty() === 0) {
      return 'Queue is empty'
    }

    const item = this.items[this.head]
    delete this.items[this.head]

    this.head++
    return item
  }

  peek() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }

    return this.items[this.head]
  }

  isEmpty() {
    return this.tail - this.head === 0
  }

  size() {
    return this.tail - this.head
  }

  clear() {
    this.items = []
  }

  print() {
    console.log(this.items.join(" -> "))
  }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(5)
queue.enqueue(2)
queue.dequeue()
queue.print()
