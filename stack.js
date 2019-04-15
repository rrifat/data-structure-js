// stack implementation using linkded list
class Node {
  constructor(value) {
    this.value = value;
  }
  next = null;
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    var node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
      this.bottom = node;
    } else {
      let tempPoint = this.top;
      this.top = node;
      this.top.next = tempPoint;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) return "Stack is Empty";
    var item = this.top;
    this.top = this.top.next;

    this.length--;
    this.length === 0 && (this.bottom = null);
    return item.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const stack = new Stack();
