const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.value = null;
    this.next = null;
  }

  getUnderlyingList() {
    // remove line with error and write your code here
    return this;
  }

  enqueue(value) {
    // remove line with error and write your code here
    if (!this.value) {
      this.value = value;
      return;
    }
    let linkedList = this;
    while (linkedList.next) {
      linkedList = linkedList.next;
    }
    linkedList.next = new ListNode(value);
  }

  dequeue() {
    // remove line with error and write your code here
    const firstValue = this.value;
    const nextNode = this.next;
    this.value = nextNode.value;
    this.next = nextNode.next;
    return firstValue;
  }
}

module.exports = {
  Queue
};
