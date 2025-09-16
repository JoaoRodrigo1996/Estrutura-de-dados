class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.previous = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
  }

  appendAtBeginning(item) {
    const node = new Node(item)

    if (this.head !== null) {
      node.next = this.head
      this.head.previous = node
    }

    this.head = node
  }

  appendAtEnd(item) {
    const node = new Node(item)

    if (this.head == null) {
      this.head = node
    } else {
      let temp = this.head
      while (temp.next !== null) {
        temp = temp.next
      }
      temp.next = node
      node.previous = temp
    }
  }

  appendAfter(target, item) {
    let temp = this.head

    while (temp && temp.data !== target) {
      temp = temp.next
    }

    if (!temp) {
      console.log(`${target} not found!`)
      return
    }

    const node = new Node(item)
    node.next = temp.next
    node.previous = temp

    if (temp.next !== null) {
      temp.next.previous = node
    }

    temp.next = node
  }

  remove(item) {
    if (this.head == null) return

    if (this.head.data == item) {
      this.head = this.head.next
      return
    }

    let current = this.head
    while (current.next !== null) {
      current.next = current.next.next
      return
    }
    current = current.next
  }

  print() {
    let temp = this.head
    let result = ""
    while (temp) {
      result += `${temp.data} ⇆ `
      temp = temp.next
    }

    console.log(result + 'NULL')
  }
}

const dll = new DoublyLinkedList()

dll.appendAtEnd(5)
dll.appendAtEnd(3)
dll.appendAtEnd(7)
dll.appendAtBeginning(1)
dll.appendAtBeginning(9)
dll.appendAfter(5, 15)
dll.print()
