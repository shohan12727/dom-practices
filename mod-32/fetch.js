const url = 'https://jsonplaceholder.typicode.com/posts';

const loadData = () => {
    fetch(url).then(response => response.json())
        .then(data => {
            console.log(data) // render al posts
            displayData(data) // render single post 
        })

}

const displayData = (posts) => {
    posts.forEach(post => console.log(post))
}

