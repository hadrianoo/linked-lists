function Node(value = null, nextNode = null) {
  return {
    value: value,
    nextNode: nextNode,
  };
}

function LinkedList() {
  return {
    firsNode: null,
    prepend(value) {
      if (this.firsNode === null) {
        this.firsNode = Node(value);
      } else {
        let temp = this.firsNode;
        this.firsNode = Node(value, temp);
      }
    },
    append(value) {
      if (this.firsNode === null) {
        this.prepend(value);
      } else {
        let temp = this.firsNode;
        while (temp.nextNode !== null) {
          temp = temp.nextNode;
        }
        temp.nextNode = Node(value);
      }
    },
    size() {
      if (this.firsNode === null) return 0;
      let counter = 1;
      let temp = this.firsNode;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
        counter++;
      }
      return counter;
    },
    head() {
      if (this.firsNode !== null) return this.firsNode.value;
    },
  };
}

export { Node, LinkedList };
