import { Node } from "./node.js";

export class LinkedList {
  constructor() {}

  prepend(key, value) {
    this.head = new Node(key, value, this.head);
  }

  append(key, value) {
    if (!this.head) this.prepend(key, value);
    else {
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      const newNode = new Node(key, value, null);
      tmp.nextNode = newNode;
    }
  }

  size() {
    let count = 0,
      tmp = this.head;
    while (tmp != null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

  headReturn() {
    return this.head;
  }

  tailReturn() {
    let tmp = this.head;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  at(index) {
    let count = 0,
      tmp = this.head;
    while (tmp != null) {
      if (count === index) {
        return tmp;
      }
      count += 1;
      tmp = tmp.nextNode;
    }
  }

  pop() {
    let curNode = this.head,
      prevNode = null;
    while (curNode.nextNode != null) {
      prevNode = curNode;
      curNode = curNode.nextNode;
    }
    prevNode.nextNode = null;
  }

  contains(key) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.key == key) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }

  find(value) {
    let count = 0,
      tmp = this.head;
    while (tmp != null) {
      if (tmp.value == value) {
        return count;
      }
      count += 1;
      tmp = tmp.nextNode;
    }
    return null;
  }

  insertAt(value, index) {
    let curNode = this.head,
      prevNode = null,
      count = 0;
    while (curNode != null) {
      if (count == index) {
        if (index == 0) {
          this.prepend(key, value);
        } else {
          prevNode.nextNode = new Node(value, curNode);
        }
      }
      count += 1;
      prevNode = curNode;
      curNode = curNode.nextNode;
    }
  }

  removeAt(index) {
    let curNode = this.head,
      prevNode = null,
      count = 0;
    while (curNode != null) {
      if (count == index) {
        if (index == 0) {
          this.head = curNode.nextNode;
        } else {
          prevNode.nextNode = curNode.nextNode;
        }
        break;
      }
      count += 1;
      prevNode = curNode;
      curNode = curNode.nextNode;
    }
  }

  toString() {
    let finalString = "",
      tmp = this.head;
    while (tmp != null) {
      finalString += ` ( ${tmp.value} ) ->`;
      tmp = tmp.nextNode;
    }
    finalString += ` ${tmp} `;
    return finalString;
  }

  updateKeyValue(key, value) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.key == key) {
        tmp.key = value;
      }
      tmp = tmp.nextNode;
    }
    return;
  }
}
