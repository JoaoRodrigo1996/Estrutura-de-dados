class HashTable {
  constructor() {
    this.size = 20
    this.table = new Array(this.size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size
    }

    return hash
  }

  set(key, value) {
    const index = this._hash(key)
    if (!this.table[index]) {
      this.table[index] = []
    }

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value
        return
      }
    }

    this.table[index].push([key, value])
  }

  get(key) {
    const index = this._hash(key)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1]
        }
      }
    }

    return undefined
  }

  remove(key) {
    const index = this._hash(key)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1)
          return true
        }
      }
    }

    return false
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`INDEX ${i}: ${JSON.stringify(this.table[i])}`)
      }
    }
  }
}

const person = new HashTable(10)
person.set("name", "Rodrigo")
person.set("age", 28)
person.set("city", "Rio de Janeiro")
person.set("nome", "Ricardo")

console.log(person.get('name'))
console.log(person.get('age'))
console.log(person.get('city'))
console.log(person.get('nome'))
console.log(person.get('country'))

person.remove('age')
console.log(person.get('age'))

person.print()