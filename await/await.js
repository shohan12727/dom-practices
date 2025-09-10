async function data() {
  console.log("One");
  console.log("two");
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => console.log("got data", data[1]))
  //     .catch((err) => console.log(err));
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await response.json();
  console.log("got the result", result);
  console.log("tree");
  console.log("four");
}

data();
