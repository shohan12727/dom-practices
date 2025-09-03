const loadData = () =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      displayData(data);
    });

const displayData = (posts) => {
  const cardContainer = document.getElementById("card_container");
  cardContainer.innerHTML = "";

  posts.forEach((post) => {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
     <div class="card">
        <h3>Title:${post.title}</h3>
        <p>
          Details: ${post.body}
        </p>
      </div>
    `;
    cardContainer.appendChild(cardDiv);
  });
};

loadData();
