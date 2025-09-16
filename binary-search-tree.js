class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const node = new Node(value)

    if (!this.root) {
      this.root = node
      return
    }

    let current = this.root
    while (true) {
      if (value === current.value) return
      if (value < current.value) {
        if (!current.left) {
          current.left = node
          return
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = node
          return
        }
        current = current.right
      }
    }
  }

  search(value) {
    let current = this.root
    while (current) {
      if (value === current.value) { return true }
      current = value < current.value ? current.left : current.right
    }
    return false
  }

  findMin(node) {
    while (node.left) {
      node = node.left
    }

    return node
  }

  remove(value, node = this.node) {
    if (!node) return null

    if (value < node.value) {
      node.left = this.remove(value, node.left)
    } else if (value > node.value) {
      node.right = this.remove(value, node.right)
    } else {
      if (!node.left && !node.right) return null
      if (!node.left) return node.right
      if (!node.right) return node.left

      const minRight = this.this.findMin(node.right)
      node.value = minRight.value
      node.right = this.remove(minRight.value, node.right)
    }

    return node
  }

  print(node = this.root, result = []) {
    if (node) {
      this.print(node.left, result)
      result.push(node.value)
      this.print(node.right, result)
    }

    return result
  }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(7)
bst.insert(20)

console.log(bst.search(2))
console.log(bst.search(40))

console.log(bst.print())