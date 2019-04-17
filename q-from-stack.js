class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
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
    if (this.top === this.bottom) {
      var item = this.top;
      this.bottom = null;
    } else {
      var item = this.top;
      this.top = this.top.next;
    }

    this.length--;
    // this.length === 0 && (this.bottom = null);
    return item;
  }

  isEmpty() {
    return this.length === 0;
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(val) {
    if (this.stack1.isEmpty()) {
      this.front = val;
    }
    this.stack1.push(val);
    this.stack1.length++;
  }
  dequeue() {
    if (this.stack1.isEmpty()) {
      console.log("Can't dequeue because queue is empty");
      return;
    }
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    console.log(this.stack2.pop());
  }
  peek() {
    if (this.front) {
      console.log("Queue top:", this.front);
      return;
    }
    console.log(null);
  }
}

var q = new Queue();
q.enqueue(3);
q.dequeue();
// q.peek();

/* ==========================
  Leetcode [232] 
  Implement Queue using Stacks
============================= */

class MyQueue {
  constructor() {
    this.first = [];
    this.second = [];
  }

  enqueue(val) {
    if (this.first.length === 0) {
      this.front = val;
    }
    this.first.push(val);
    console.log(this);
  }

  dequeue() {
    if (this.empty()) {
      console.log("Stack is empty");
      return;
    }
    if (this.second.length === 0) {
      while (this.first.length > 0) {
        this.second.push(this.first.pop());
      }
    }
    console.log(this.second);
    var item = this.second.pop();

    console.log(item);
  }

  peek() {
    if (this.empty()) {
      console.log(null);
      return;
    }
    if (this.second.length !== 0) {
      console.log(this.second[this.second.length - 1]);
      return;
    }
    console.log(this.front);
  }

  empty() {
    return this.second.length === 0 && this.first.length === 0;
  }
}

var q2 = new MyQueue();
// q2.enqueue(1);
// q2.enqueue(2);
// q2.dequeue();
// q2.enqueue(3);
// q2.enqueue(4);
// q2.dequeue();
// q2.peek();
// q2.dequeue();
// q2.peek();
// q2.dequeue();
q2.peek();
