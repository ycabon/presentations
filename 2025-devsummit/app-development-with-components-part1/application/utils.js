define([], function () {
  function sqlAnd(...clauses) {
    return clauses
      .filter((clause) => clause)
      .map((clause) => `(${clause})`)
      .join(" AND ");
  }

  /**
   * Updates a list of children in a container element
   */
  function updateElementChildren(element, items, createChild, updateChild) {
    const existingChildren = Array.from(element.children);
    const existingChildrenMap = new Map(
      existingChildren.map((child) => [child.dataset.key, child])
    );

    items.forEach((item, index) => {
      let child = existingChildrenMap.get(item.key);
      if (!child) {
        child = createChild(item);
        updateChild(child, item);
        child.dataset.key = item.key;
        element.insertBefore(child, element.children[index] || null);
      } else {
        updateChild(child, item);
        existingChildrenMap.delete(item.key);
        if (element.children[index] !== child) {
          element.insertBefore(child, element.children[index] || null);
        }
      }
    });

    existingChildrenMap.forEach((child) => element.removeChild(child));
  }

  return {
    sqlAnd,
    updateElementChildren,
  };
});
