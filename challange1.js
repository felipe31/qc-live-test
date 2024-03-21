function findDuplicates(list) {
  if (!Array.isArray(list)) return false;

  const map = new Map();
  for (const element of list) {
    if (map.get(element)) {
      return true;
    }
    map.set(element, true);
  }

  return false;
}

export function findDuplicatesAB(listA, listB) {
  return findDuplicates([...listA, ...listB]);
}
