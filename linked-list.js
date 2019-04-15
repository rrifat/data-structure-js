class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };

    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;

    return this;
  }

  printList() {
    let currentNode = this.head;
    const array = [];

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);

    const leadNode = traverseToIndex(index - 1, this.head);

    const follower = leadNode.next;

    leadNode.next = newNode;
    newNode.prev = leadNode;

    newNode.next = follower;
    follower.prev = newNode;

    this.length++;

    return this.printList();
  }

  remove(index) {
    // check the params
    const leadNode = traverseToIndex(index - 1, this.head);

    const removedNode = leadNode.next;
    const nextNode = removedNode.next;

    leadNode.next = nextNode;
    nextNode.prev = leadNode;

    this.length--;

    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }
    let prevNode = null;
    let currentNode = this.head;
    let nextNode;

    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;

    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);

myLinkedList.prepend(8);

myLinkedList.printList();

myLinkedList.insert(3, 33);

myLinkedList.remove(3);

myLinkedList.reverse();

// helper function
function traverseToIndex(index, head) {
  let counter = 0;
  let currentNode = head;

  while (counter !== index) {
    currentNode = currentNode.next;
    counter++;
  }

  return currentNode;
}
