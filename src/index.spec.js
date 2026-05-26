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
  newList = null;
});

describe("linked list append function", () => {
  const value = "i am node element";
  let newNode = Node();
  beforeEach(() => {
    newNode.value = "i am first";
    newList.firsNode = newNode;
  });
  afterEach(() => {
    newNode = Node();
  });

  test("append new node to end of the list", () => {
    newList.append(value);
    expect(newList.firsNode.nextNode.value).toEqual("i am node element");
    expect(newList.firsNode.nextNode.nextNode).toEqual(null);
  });
  test("check if append does not remove previous element", () => {
    newList.append(value);
    expect(newList.firsNode.value).toEqual("i am first");
    expect(newList.firsNode.nextNode).not.toEqual(null);
  });
});

describe("linked list previous function", () => {
  const value = "i am node element 1";
  test("append new node as first ele if firsNode is null", () => {
    newList.append(value);
    expect(newList.firsNode.value).toEqual("i am node element 1");
    expect(newList.firsNode.nextNode).toEqual(null);
  });
  test("prepend if firsNode is null", () => {
    newList.prepend(value);
    expect(newList.firsNode.value).toEqual("i am node element 1");
    expect(newList.firsNode.nextNode).toEqual(null);
  });
  test("prepend if firsNode is not null", () => {
    let newNode = Node();
    newNode.value = "i want to be first";
    newList.firsNode = newNode;

    newList.prepend(value);
    expect(newList.firsNode.value).toEqual("i am node element 1");
    expect(newList.firsNode.nextNode).not.toEqual(null);
    expect(newList.firsNode.nextNode.value).toEqual("i want to be first");
  });
});

describe("test list size function", () => {
  test("list size 0", () => {
    expect(newList.size()).toEqual(0);
  });
  test("list size 3", () => {
    let fNode = Node();
    fNode.value = `i am totally first ele now`;
    newList.firsNode = fNode;

    let secondNode = Node();
    secondNode.value = `i am second ele`;
    newList.firsNode.nextNode = secondNode;

    let thirdNode = Node();
    thirdNode.value = `i am third ele`;
    newList.firsNode.nextNode.nextNode = thirdNode;

    expect(newList.size()).toEqual(3);
  });
});

describe("test firsNode function", () => {
  test("if list empty return undefined", () => {
    expect(newList.head()).toEqual(undefined);
  });
  test("return value of first node", () => {
    let fNode = Node();
    fNode.value = `i am totally first ele now`;
    newList.firsNode = fNode;
    expect(newList.head()).toEqual(`i am totally first ele now`);
  });
});
