function Node(value = null, nextNode = null) {
  return {
    value: value,
    nextNode: nextNode,
  };
}

function LinkedList() {
  function isNextNodeNull(node) {
    return node.nextNode !== null;
  }
  function isNodeNull(node) {
    return node !== null;
  }
  return {
    firstNode: null,
    isListEmpty() {
      if (this.firstNode === null) return true;
      return false;
    },

    prepend(value) {
      if (this.isListEmpty()) {
        this.firstNode = Node(value);
      } else {
        let node = this.firstNode;
        this.firstNode = Node(value, node);
      }
    },
    append(value) {
      if (this.isListEmpty()) {
        this.prepend(value);
      } else {
        let node = this.firstNode;
        while (isNextNodeNull(node)) {
          node = node.nextNode;
        }
        node.nextNode = Node(value);
      }
    },
    size() {
      if (this.isListEmpty()) return 0;
      let counter = 1;
      let node = this.firstNode;
      while (isNextNodeNull(node)) {
        node = node.nextNode;
        counter++;
      }
      return counter;
    },
    head() {
      if (this.isListEmpty()) return;
      return this.firstNode.value;
    },
    tail() {
      if (this.isListEmpty()) return;
      let node = this.firstNode;
      while (isNextNodeNull(node)) {
        node = node.nextNode;
      }
      return node.value;
    },
    at(index) {
      if (index >= this.size()) return;
      let node = this.firstNode;
      let counter = 0;
      while (isNodeNull(node)) {
        if (counter === index) return node.value;
        node = node.nextNode;
        counter++;
      }
    },
    pop() {
      if (this.isListEmpty()) return;
      let head = this.firstNode;
      if (this.size() > 1) {
        this.firstNode = head.nextNode;
        return head.value;
      } else {
        this.firstNode = null;
        return head.value;
      }
    },
    contains(value) {
      if (this.isListEmpty()) return false;
      let node = this.firstNode;
      while (isNodeNull(node)) {
        if (node.value === value) return true;
        node = node.nextNode;
      }
      return false;
    },
    findIndex(value) {
      if (this.isListEmpty()) return -1;
      let node = this.firstNode;
      let index = 0;
      while (isNodeNull(node)) {
        if (node.value === value) return index;
        index++;
        node = node.nextNode;
      }
      return -1;
    },
    toString() {
      if (this.isListEmpty()) return "";
      let node = this.firstNode;
      let string = "";
      while (isNodeNull(node)) {
        string += `( ${node.value} )` + " -> ";
        node = node.nextNode;
      }
      if (node === null) string += "null";
      return string;
    },
    insertAt(index, ...values) {
      if (index > this.size() || index < 0) throw RangeError();
      const valuesArray = [...values].reverse();
      if (index === 0) {
        valuesArray.forEach((item) => this.prepend(item));
        return;
      }

      let prev = null;
      let cur = this.firstNode;
      let counter = 0;

      for (const item of valuesArray) {
        while (isNodeNull(cur) && counter !== index) {
          counter++;
          prev = cur;
          cur = cur.nextNode;
        }

        if (cur !== null) {
          prev.nextNode = Node(item, cur);
        } else {
          prev.nextNode = Node(item);
        }
        counter = 0;
        prev = null;
        cur = this.firstNode;
      }
      // return prev;
    },
  };
}
const newList = LinkedList();
newList.append("dog");
newList.append("cat");
newList.append("parrot");
newList.append("hamster");
newList.append("snake");
newList.append("turtle");
newList.insertAt(0, 10, 11, 12);
console.log(newList.toString());
export { Node, LinkedList };
