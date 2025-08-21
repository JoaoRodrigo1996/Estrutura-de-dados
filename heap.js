/* 
- Array Representation of binary tree
- Complete binary tree
- Heap
- Insert and Delete
- Heap Sort
- Heapify
- Priority Queue  
*/

class Heap {
  constructor() {
    this.items = []
  }

  getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1 }
  getRightChildIndex(parentIndex) { return 2 * parentIndex + 2 }
  getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2) }

  hasLeftChild(index) { return this.getLeftChildIndex(index) < this.items.length }
  hasRightChild(index) { return this.getRightChildIndex(index) < this.items.length }
  hasParent(index) { return this.getParentIndex(index) >= 0 }

  leftChild(index) { return this.items[this.getLeftChildIndex(index)] }
  rightChild(index) { return this.items[this.getRightChildIndex(index)] }
  parent(index) { return this.items[this.getParentIndex(index)] }

  swap(indexOne, indexTwo) {
    const temp = this.items[indexOne]
    this.items[indexOne] = this.items[indexTwo]
    this.items[indexTwo] = temp
  }

  peek() {
    if(this.items.length === 0){
      throw new Error('Heap is empty cannot peek')
    }
    return this.items[0]
  }

  poll() {
    if (this.items.length === 0) {
      throw new Error("Heap is empty cannot add item")
    }

    const item = this.items[0]
    this.items[0] = this.items[this.items.length - 1]
    this.items.length = this.items.length - 1

    this.heapifyDown()
    return item
  }

  add(item) {
    this.items[this.items.length] = item
    this.heapifyUp()
  }

  heapifyUp() {
    let index = this.items.length - 1

    while (this.hasParent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.getParentIndex(index), index)
      index = this.getParentIndex(index)
    }
  }

  heapifyDown() {
    let index = 0

    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index)

      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index)
      }

      if (this.items[index] < this.items[smallerChildIndex]) {
        break
      } else {
        this.swap(index, smallerChildIndex)
      }
      index = smallerChildIndex
    }
  }
}

const heap = new Heap()
heap.add(15)
heap.add(5)
heap.add(20)
heap.add(10)
console.log(`Heap: ${heap.items}`)
console.log(`Removed: ${heap.poll()}`)
console.log(`Heap: ${heap.items}`)
console.log(`Heap peek: ${heap.peek()}`)
console.log(`Removed: ${heap.poll()}`)
console.log(`Heap: ${heap.items}`)
console.log(`Heap peek: ${heap.peek()}`)
console.log(`Removed: ${heap.poll()}`)
console.log(`Heap: ${heap.items}`)
