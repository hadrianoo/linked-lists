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
    newList.firstNode = newNode;
  });
  afterEach(() => {
    newNode = Node();
  });

  test("append new node to end of the list", () => {
    newList.append(value);
    expect(newList.firstNode.nextNode.value).toEqual("i am node element");
    expect(newList.firstNode.nextNode.nextNode).toEqual(null);
  });
  test("check if append does not remove previous element", () => {
    newList.append(value);
    expect(newList.firstNode.value).toEqual("i am first");
    expect(newList.firstNode.nextNode).not.toEqual(null);
  });
});

describe("linked list previous function", () => {
  const value = "i am node element 1";
  test("append new node as first ele if firstNode is null", () => {
    newList.append(value);
    expect(newList.firstNode.value).toEqual("i am node element 1");
    expect(newList.firstNode.nextNode).toEqual(null);
  });
  test("prepend if firstNode is null", () => {
    newList.prepend(value);
    expect(newList.firstNode.value).toEqual("i am node element 1");
    expect(newList.firstNode.nextNode).toEqual(null);
  });
  test("prepend if firstNode is not null", () => {
    let newNode = Node();
    newNode.value = "i want to be first";
    newList.firstNode = newNode;

    newList.prepend(value);
    expect(newList.firstNode.value).toEqual("i am node element 1");
    expect(newList.firstNode.nextNode).not.toEqual(null);
    expect(newList.firstNode.nextNode.value).toEqual("i want to be first");
  });
});

describe("test list size function", () => {
  test("list size 0", () => {
    expect(newList.size()).toEqual(0);
  });
  test("list size 3", () => {
    let fNode = Node();
    fNode.value = `i am totally first ele now`;
    newList.firstNode = fNode;

    let secondNode = Node();
    secondNode.value = `i am second ele`;
    newList.firstNode.nextNode = secondNode;

    let thirdNode = Node();
    thirdNode.value = `i am third ele`;
    newList.firstNode.nextNode.nextNode = thirdNode;

    expect(newList.size()).toEqual(3);
  });
});

describe("test head function", () => {
  test("if list empty return undefined", () => {
    expect(newList.head()).toEqual(undefined);
  });
  test("return value of first node", () => {
    let fNode = Node();
    fNode.value = `i am totally first ele now`;
    newList.firstNode = fNode;
    expect(newList.head()).toEqual(`i am totally first ele now`);
  });
});

describe("test tail function", () => {
  test("when empty return undefined", () => {
    expect(newList.tail()).toEqual(undefined);
  });
  test("return last value in list", () => {
    let fNode = Node();
    fNode.value = `i am totally first ele now`;
    newList.firstNode = fNode;

    let sNode = Node();
    sNode.value = `i am last ele`;
    newList.firstNode.nextNode = sNode;

    expect(newList.tail()).toEqual(`i am last ele`);
    expect(newList.firstNode.nextNode.nextNode).toEqual(null);
  });
});

describe("test at function", () => {
  beforeEach(() => {
    let fNode = Node();
    fNode.value = `i am totally index 0 ele now`;
    newList.firstNode = fNode;

    let sNode = Node();
    sNode.value = `i am index 1 ele`;
    newList.firstNode.nextNode = sNode;

    let tNode = Node();
    tNode.value = `i am index 2 ele`;
    newList.firstNode.nextNode.nextNode = tNode;
  });

  test("if there in no node at index return undefined", () => {
    expect(newList.at(3)).toEqual(undefined);
  });
  test("if there in node at index 0 return value", () => {
    expect(newList.at(0)).toEqual(`i am totally index 0 ele now`);
  });

  test("if there in node at index 1 return value", () => {
    expect(newList.at(1)).toEqual(`i am index 1 ele`);
    expect(newList.firstNode.nextNode.value).toEqual(`i am index 1 ele`);
  });
  test("if there in node at index 2 return value", () => {
    expect(newList.at(2)).toEqual(`i am index 2 ele`);
    expect(newList.firstNode.nextNode.nextNode.value).toEqual(
      `i am index 2 ele`,
    );
  });
});
