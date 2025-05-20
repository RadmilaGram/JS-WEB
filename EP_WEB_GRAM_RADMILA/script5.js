function getObjectKeys(obj) {
  return Object.keys(obj);
}

console.log(getObjectKeys({ name: "Alice", age: 25 }));
console.log(getObjectKeys({ a: 1, b: 2, c: 3 }));
