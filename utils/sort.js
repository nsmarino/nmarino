function sort(a, b) {
  if (a.order > b.order) {
    return -1;
  }
  if (a.order < b.order) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

export default sort