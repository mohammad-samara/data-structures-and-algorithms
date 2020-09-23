class Stack {
  constructor() {
    this.data = [];
    this.maxValues = [];
  }

  push(element) {
    if (this.data.length === 0 || element >= this.findMax()) {
      this.maxValues.push(element)
    }
    this.data.push(element);
    return this.data
  }

  pop() {
    if (this.data.length > 0) {
      if(this.maxValues[this.maxValues.length-1] === this.data[this.data.length-1]){this.maxValues.pop()}
      return this.data.pop()
    }
  }

  peek() {
    return this.data[this.data.length-1]
  }

  findMax() {
    return this.maxValues[this.maxValues.length - 1]
  }
}

module.exports = Stack;
