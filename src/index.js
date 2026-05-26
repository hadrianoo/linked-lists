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
      // if (index === 0) return this.firstNode.value;
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
  };
}

export { Node, LinkedList };
