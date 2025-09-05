const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((json) => {
      displayLessons(json.data);
    });
};

const loadLevelWord = async (id) => {
  //   console.log(id);
  const url = await fetch(
    `https://openapi.programming-hero.com/api/level/${id}`
  );
  const json = await url.json();
  displayLavelWord(json.data);
};
const displayLavelWord = (words) => {
    const wordContainer = document.getElementById('word_container'); 
    wordContainer.innerHTML = "";
    words.forEach(word => {
        console.log(word);
        const card = document.createElement('div');
        card.innerHTML = `
           <p> Cat </p>
        `;
        wordContainer.appendChild(card);

    })
};
const displayLessons = (levels) => {
  // 1. get the container and make it empty
  // 2. get into every lesson
  // 3. create element
  // 4.appeend the element

  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  levels.forEach((level) => {
    // console.log(level);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${level.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>Lesson - ${level.level_no}
        </button>
    `;
    levelContainer.appendChild(btnDiv);
  });
};
loadLessons();
