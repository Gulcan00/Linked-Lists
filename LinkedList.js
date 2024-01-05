const createNode = require("./Node");

function createLinkedList() {
  let headNode = createNode();
  let tailNode = createNode();

  function appendValue(value) {
    if (!headNode.value) {
      headNode.value = value;
      tailNode.value = value;
    } else {
      headNode.nextNode = createNode(value);
      tailNode = headNode.nextNode;
    }
  }

  function prependValue(value) {
    const newNode = createNode(value);
    newNode.nextNode = headNode;
    headNode = newNode;
  }

  function size() {
    let tempList = headNode;
    let count = 0;
    while (tempList) {
      count++;
      tempList = tempList.nextNode;
    }

    return count;
  }

  function head() {
    return headNode;
  }

  function tail() {
    return tailNode;
  }

  function at(index) {
    let tempNode = headNode;
    let currentIndex = 0;
    while (currentIndex !== index) {
      tempNode = tempNode.nextNode;
      currentIndex++;
    }

    return tempNode;
  }

  function pop() {
    let prev = headNode;
    let next = headNode.nextNode;
    while (next.nextNode) {
      prev = next;
      next = next.nextNode;

      if (!next.nextNode) {
        prev.nextNode = null;
        tailNode = prev;
      }
    }
  }

  function contains(value) {
    let tempNode = headNode;
    while (tempNode) {
      if (tempNode.value === value) {
        return true;
      }

      tempNode = tempNode.nextNode;
    }

    return false;
  }

  function find(value) {
    let index = 0;
    let tempNode = headNode;

    while (tempNode) {
      if (tempNode.value === value) {
        return index;
      }
      index++;
      tempNode = tempNode.nextNode;
    }

    return null;
  }

  function toString() {
    let str = "";
    let tempNode = headNode;
    while (tempNode) {
      str += `(${tempNode.value}) -> `;

      if (!tempNode.nextNode) {
        str += "(null)";
      }

      tempNode = tempNode.nextNode;
    }

    return str;
  }

  function insertAt(value, index) {
    const newNode = createNode(value);

    if (index === 0) {
      newNode.nextNode = headNode;
      headNode = newNode;
    }

    let currentIndex = 1;
    let prev = headNode;
    let current = headNode.nextNode;

    while (currentIndex < index && current) {
      prev = current;
      current = current.nextNode;
    }

    prev.nextNode = newNode;
    newNode.nextNode = current;

    if (!current) {
      tailNode = newNode;
    }
  }

  function removeAt(index) {
    let currentIndex = 1;
    let prev = headNode;
    let current = headNode.nextNode;
    if (index === 0) {
      if (headNode) {
        headNode = headNode.nextNode;
      }
      return;
    }

    while (currentIndex < index && current) {
      prev = current;
      current = current.nextNode;
      currentIndex++;
    }

    prev.nextNode = current.nextNode;

    if (!current) {
      tailNode = prev;
    }
  }

  return {
    appendValue,
    prependValue,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const linkedList = createLinkedList();

console.log("appendValue(1)");
linkedList.appendValue(1);
console.log(linkedList.toString());

console.log("appendValue(2)");
linkedList.appendValue(2);
console.log(linkedList.toString());

console.log("prependValue(3)");
linkedList.prependValue(3);
console.log(linkedList.toString());

console.log(`size(): ${linkedList.size()}`);

console.log(`head(): ${linkedList.head().value}`);
console.log(`tail(): ${linkedList.tail().value}`);

console.log(`at(1): ${linkedList.at(1).value}`);

console.log("pop()");
linkedList.pop();
console.log(linkedList.toString());

console.log(`contains(2): ${linkedList.contains(2)}`);

console.log(`find(2): ${linkedList.find(2)}`);

console.log("insertAt(4, 1)");
linkedList.insertAt(4, 1);
console.log(linkedList.toString());

console.log("removeAt(1)");
linkedList.removeAt(1);
console.log(linkedList.toString());
