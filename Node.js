function createNode(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

module.exports = createNode;
