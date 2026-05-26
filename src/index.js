function Node(value = null, nextNode = null) {
  return {
    value: value,
    nextNode: nextNode,
  };
}

function LinkedList() {
  return {
    firstNode: null,
    prepend(value) {
      if (this.firstNode === null) {
        this.firstNode = Node(value);
      } else {
        let temp = this.firstNode;
        this.firstNode = Node(value, temp);
      }
    },
    append(value) {
      if (this.firstNode === null) {
        this.prepend(value);
      } else {
        let temp = this.firstNode;
        while (temp.nextNode !== null) {
          temp = temp.nextNode;
        }
        temp.nextNode = Node(value);
      }
    },
    size() {
      if (this.firstNode === null) return 0;
      let counter = 1;
      let temp = this.firstNode;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
        counter++;
      }
      return counter;
    },
    head() {
      if (this.firstNode === null) return;
      return this.firstNode.value;
    },
    tail() {
      if (this.firstNode === null) return;
      let temp = this.firstNode;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      return temp.value;
    },
    at(index) {
      if (index >= this.size()) return;
      if (index === 0) return this.firstNode.value;
      let temp = this.firstNode;
      let counter = 0;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
        counter++;
        if (counter === index) return temp.value;
      }
    },
  };
}

export { Node, LinkedList };
