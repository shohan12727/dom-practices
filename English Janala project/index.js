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
  reoveActivce(); // remove all active class
  const clickBtn = document.getElementById(`lesson-btn-${id}`);
  // console.log(clickBtn);
  clickBtn.classList.add("active");

  displayLavelWord(json.data);
};

const reoveActivce = () => {
  const lessonButtons = document.querySelectorAll(".lesson-btn");
  // console.log(lessonButtons);
  lessonButtons.forEach((btn) => btn.classList.remove("active"));
};
const loadWordDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  //  console.log(url);
  const response = await fetch(url);
  const details = await response.json();
  displayWordDetails(details.data);
};
const createElemetns = (arr) => {
    const htmlElemetns = arr.map(el => 
        `<span class="btn">${el}</span> `)
        return(htmlElemetns.join(" "));  
    
}
const displayWordDetails = (word) => {
  console.log(word);
  const detailsContainer = document.getElementById("details_container");
  detailsContainer.innerHTML = `
  <div class="">
  <h2 class="text-2xl font-bold">${word.word}(<i class="fa-solid fa-microphone-lines"></i> :${word.pronunciation})</h2>
</div>
<div class="">
  <h2 class="font-bold">${word.meaning}</h2>
  <p></p>
</div>
<div class="">
  <h2 class="font-bold">Example</h2>
  <p>${word.sentence}</p>
</div>
<div class="">
  <h2 class="font-bold">Synonym</h2>
   <div class= "">${createElemetns(word.synonyms)}</div>
</div>
  `;
  // word_modal
  document.getElementById("word_modal").showModal();
};

const displayLavelWord = (words) => {
  const wordContainer = document.getElementById("word_container");
  wordContainer.innerHTML = "";
  if (words.length == 0) {
    wordContainer.innerHTML = `
       <div class="text-center  col-span-full space-y-6 py-10 font-bangla">
       <img class="mx-auto" src="./assets/alert-error.png"/>
      <p class="text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
      <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
    </div>
    `;
    return;
  }
  words.forEach((word) => {
    // console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
       <h2 class="font-bold text-2xl">${
         word.word ? word.word : "Word can't found"
       }</h2>
       <p class="font-semibold">${
         word.meaning ? word.meaning : "Meaning can't found"
       }</p>
       <div class="text-2xl font-semibold font-bangla">${
         word.pronunciation ? word.pronunciation : "Pronunciation can't found"
       }</div>
       <div class="flex justify-between">
<button onclick="loadWordDetail(${
      word.id
    })" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
<button onclick="my_modal_5.showModal()" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
       </div>

     </div>
        `;
    wordContainer.appendChild(card);
  });
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
        <button id="lesson-btn-${level.level_no}" onclick="loadLevelWord(${level.level_no})" class="lesson-btn btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>Lesson - ${level.level_no}
        </button>
    `;
    levelContainer.appendChild(btnDiv);
  });
};
loadLessons();
