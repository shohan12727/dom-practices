// const loadData = () => { fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => res.json())
// .then(data => console.log(data))
// }
// loadData ();
// console.log('Shohan');
// console.log(false);

// here we can see that first result is shohan, then false and then loadData

// now i want syncronus

const load = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("King shohan");
  const result = await response.json();
  console.log(true);
  console.log('ami bangla bolchi');
  
  console.log(result);
};

load();
