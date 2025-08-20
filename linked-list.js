class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(item) {
    const node = new Node(item)

    if (this.head == null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
  }

  prepend(item) {
    const newHead = new Node(item)
    newHead.next = this.head
    this.head = newHead
  }

  remove(item) {
    if (this.head == null) return

    if (this.head.data == item) {
      this.head = this.head.next
      return
    }

    let current = this.head
    while (current.next != null) {
      if (current.next.data == item) {
        current.next = current.next.next
        return
      }
      current = current.next
    }
  }
}

const linkedList = new LinkedList()

console.log(linkedList)
linkedList.append(10)
console.log(linkedList)
linkedList.append(20)
console.log(linkedList)
linkedList.prepend(50)
console.log(linkedList)
linkedList.remove(50)
console.log(linkedList)
linkedList.remove(20)
console.log(linkedList)
