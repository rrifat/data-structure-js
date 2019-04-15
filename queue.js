class Node {
  constructor(value) {
    this.value = value;
  }
  next = null;
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }
  enqueue(value) {
    var newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}
