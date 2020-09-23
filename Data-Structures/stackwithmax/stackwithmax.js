class Stack {
  constructor() {
    this.data = [];
    this.size = 0;
    this.maxValues = [];
  }

  push(element) {
    // if the stack is empty or the element we're pushing is greater than currentMax, add the new element to maxValues
    if (this.size === 0 || element >= this.findMax()) {
      this.maxValues.push(element)
    }
    // otherwise, push the currentMax to maxValues again, to align lengths of arrays and keep currentMax
    else {
      this.maxValues.push(this.findMax())
    }
    // increase the size variable by 1 to keep track of length, and add element to stack
    this.size += 1
    this.data.push(element);
    return this.data
  }

  pop() {
    // if the stack isn't empty, decrease the size count and remove element from the end of the stack and maxValue array to keep lengths aligned
    if (this.size > 0) {
      this.size -= 1;
      this.maxValues.pop()
      return this.data.pop()
    }
  }

  // this returns the top element in the stack (last element in the array)
  peek() {
    return this.data[this.size - 1]
  }

  // this returns the maxValue currently in the stack, by grabbing the last element of the maxValue stack
  findMax() {
    return this.maxValues[this.size - 1]
  }
}

module.exports = Stack;
