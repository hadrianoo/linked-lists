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
        let temp = this.firstNode;
        this.firstNode = Node(value, temp);
      }
    },
    append(value) {
      if (this.isListEmpty()) {
        this.prepend(value);
      } else {
        let temp = this.firstNode;
        while (isNextNodeNull(temp)) {
          temp = temp.nextNode;
        }
        temp.nextNode = Node(value);
      }
    },
    size() {
      if (this.isListEmpty()) return 0;
      let counter = 1;
      let temp = this.firstNode;
      while (isNextNodeNull(temp)) {
        temp = temp.nextNode;
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
      let temp = this.firstNode;
      while (isNextNodeNull(temp)) {
        temp = temp.nextNode;
      }
      return temp.value;
    },
    at(index) {
      if (index >= this.size()) return;
      // if (index === 0) return this.firstNode.value;
      let temp = this.firstNode;
      let counter = 0;
      while (isNodeNull(temp)) {
        if (counter === index) return temp.value;
        temp = temp.nextNode;
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
      let temp = this.firstNode;
      while (isNodeNull(temp)) {
        if (temp.value === value) return true;
        temp = temp.nextNode;
      }
      return false;
    },
    findIndex(value) {
      if (this.isListEmpty()) return -1;
      let temp = this.firstNode;
      let index = 0;
      while (isNodeNull(temp)) {
        if (temp.value === value) return index;
        index++;
        temp = temp.nextNode;
      }
      return -1;
    },
  };
}

export { Node, LinkedList };
