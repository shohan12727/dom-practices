const url = 'https://jsonplaceholder.typicode.com/posts';
const loadData = () => fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        displayData(data)
    });


const displayData = (posts) => {
    // 1. dhore niye aslam post_container ke 
    const postContainer = document.getElementById('post_container');
    // console.log(postContainer);
    posts.forEach(post => {
        // console.log(post.body);
        // 2. create element korte hobe 

        const li = document.createElement('li');
        li.innerText = post.title;
        li.innerText = post.body;
        // console.log(li);



        postContainer.appendChild(li);

    })
}