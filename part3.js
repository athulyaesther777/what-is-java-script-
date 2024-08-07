function add(x, y, cont) {
  cont(x + y);
}

add(2, 3, (result) => {
  console.log(result); // Output: 5
});
