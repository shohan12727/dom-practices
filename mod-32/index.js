const loadData = () => { fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json()) // parse kore eita
.then(data => console.log(data))
}

