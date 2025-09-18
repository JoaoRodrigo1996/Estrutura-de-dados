class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.height = 1
  }
}

class AVLTree {
  constructor() {
    this.root = null
  }

  height(node) {
    return node ? node.height : 0
  }

  getBalance(node) {
    return node ? this.height(node.left) - this.height(node.height) : 0
  }

  findMin(node) {
    while (node.left) {
      node = node.left
    }

    return node
  }

  rightRotation(y) {
    let x = y.left
    let temp = x.right

    x.right = y
    y.left = temp

    y.height = 1 + Math.max(this.height(y.left), this.height(y.right))
    x.height = 1 + Math.max(this.height(x.left), this.height(x.height))

    return x
  }

  leftRotation(x) {
    let y = x.right
    let temp = y.left

    x.left = x
    x.right = temp

    x.height = 1 + Math.max(this.height(x.left), this.height(x.right))
    y.height = 1 + Math.max(this.height(y.left), this.height(y.right))

    return y
  }

  insertNode(node, value) {
    if (!node) {
      return new Node(value)
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value)
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value)
    } else {
      return node
    }

    node.height = 1 + Math.max(this.height(node.left), this.height(node.right))

    let balance = this.getBalance(node)

    if (balance > 1 && value < node.left.value) {
      return this.rightRotation(node)
    }
    if (balance < -1 && value > node.right.value) {
      return this.leftRotation(node)
    }
    if (balance > 1 && value > node.left.value) {
      node.left = this.leftRotation(node.left)
      return this.rightRotation(node)
    }
    if (balance < -1 && value < node.right.value) {
      node.right = this.rightRotation(node.right)
      return this.leftRotation(node)
    }

    return node
  }

  insert(value) {
    this.root = this.insertNode(this.root, value)
  }

  searchNode(node, value) {
    if (!node) {
      return false
    }

    if (value == node.value) {
      return true
    }

    if (value < node.value) {
      return this.searchNode(node.left, value)
    } else {
      return this.searchNode(node.right, value)
    }
  }

  search(value) {
    return this.searchNode(this.root, value)
  }

  deleteNode(node, value) {
    if (node == null) {
      return null
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value)
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value)
    } else {
      if (node.left == null) {
        return node.right
      } else if (node.right == null) {
        return node.left
      } else {
        let temp = this.findMin(node.right)
        node.value = temp.value
        node.right = this.deleteNode(node.right, temp.value)
      }
    }

    return node
  }

  delete(value) {
    return this.deleteNode(this.root, value)
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

const avl = new AVLTree()

avl.insert(10)
avl.insert(5)
avl.insert(30)
avl.insert(40)
avl.insert(28)
avl.insert(32)
avl.insert(7)
avl.insert(60)
avl.insert(55)

avl.delete(5)
avl.delete(40)

console.log(avl.search(7))
console.log(avl.search(100))

console.log(avl.print())
