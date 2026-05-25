function Node(value = null, nextNode = null) {
  return {
    value: value,
    nextNode: nextNode,
  };
}

function LinkedList() {
  return {
    head: null,
    prepend(value) {
      if (this.head === null) {
        this.head = Node(value);
      } else {
        let temp = this.head;
        this.head = Node(value, temp);
      }
    },
    append(value) {
      if (this.head === null) {
        this.prepend(value);
      } else {
        let temp = this.head;
        while (temp.nextNode !== null) {
          temp = temp.nextNode;
        }
        temp.nextNode = Node(value);
      }
    },
    size() {
      if (this.head === null) return 0;
      let counter = 1;
      let temp = this.head;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
        counter++;
      }
      return counter;
    },
  };
}

export { Node, LinkedList };
