class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  isEmpty() {
    return this.top == null
  }

  peek() {
    if (this.isEmpty()) {
      return 'Stack is empty'
    }

    return this.top.data
  }

  push(data) {
    const node = new Node(data)
    node.next = this.top
    this.top = node
  }

  pop() {
    if (this.isEmpty()) {
      return 'Stack is empty'
    }

    const item = this.top
    this.top = item.next

    return item.data
  }

  print() {
    console.log(this.items)
  }
}

const stack = new Stack()
console.log(stack)
stack.push(10)
stack.push(5)
console.log(stack.peek())
stack.push(2)
console.log(stack)
stack.pop()
stack.pop()
console.log(stack)
stack.peek()
console.log(stack)
console.log(stack.isEmpty())
