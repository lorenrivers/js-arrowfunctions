const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(2, 9));

//if function body is a single line, can leave out the curly braces and return keyword as below:
const subtract = (a, b) => a - b;
console.log(subtract(5, 2));

const divide = (a, b) => a / b;
console.log(divide(10, 2));

// You can't always use async/await at the top level of a JS file, so using a main function that is async is a simple way to ensure you can use async/await.
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

async function main() {
  const posts = await getPosts();
  console.log("Posts:", posts);
}

main();
