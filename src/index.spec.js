import { LinkedList, Node } from "./index.js";

describe("test node function", () => {
  test("return null", () => {
    expect(Node()).toEqual({ value: null, nextNode: null });
  });
  test("return values", () => {
    expect(Node("i am value", "i am nest node")).toEqual({
      value: "i am value",
      nextNode: "i am nest node",
    });
  });
});

let newList = null;

beforeEach(() => {
  newList = LinkedList();
});
afterEach(() => {
  newList.head = null;
});

describe("linked list append function", () => {
  let newNode = Node();
  beforeEach(() => {
    newNode.value = "i am first";
    newList.head = newNode;
  });
  afterEach(() => {
    newNode = Node();
  });

  test("append new node to end of the list", () => {
    const value = "i am node element 1";
    newList.append(value);
    expect(newList.head.nextNode.value).toEqual("i am node element 1");
    expect(newList.head.nextNode.nextNode).toEqual(null);
  });
  test("check if append does not remove previous element", () => {
    const value = "i am node element 2";
    newList.append(value);
    expect(newList.head.value).toEqual("i am first");
    expect(newList.head.nextNode).not.toEqual(null);
  });
});

describe("linked list previous function", () => {
  const value = "i am node element 1";
  test("append new node as first ele if head is null", () => {
    newList.append(value);
    expect(newList.head.value).toEqual("i am node element 1");
    expect(newList.head.nextNode).toEqual(null);
  });
  test("prepend if head is null", () => {
    newList.prepend(value);
    expect(newList.head.value).toEqual("i am node element 1");
    expect(newList.head.nextNode).toEqual(null);
  });
  test("prepend if head is not null", () => {
    let newNode = Node();
    newNode.value = "i want to be first";
    newList.head = newNode;

    newList.prepend(value);
    expect(newList.head.value).toEqual("i am node element 1");
    expect(newList.head.nextNode).not.toEqual(null);
    expect(newList.head.nextNode.value).toEqual("i want to be first");
  });
});

describe("test list size function", () => {
  test("list size 4", () => {
    let firstNode = Node();
    firstNode.value = `i am totally first ele now`;
    newList.head = firstNode;
    const size = 4;
    for (let i = 0; i < size - 1; i++) {
      let newNode = Node();
      newNode.value = `i am ${i} element`;
      newList.nextNode = newNode;
    }

    expect(newList.size()).toEqual(4);
  });
});
