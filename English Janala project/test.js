const synonyms = ["Shohan", "Shohag", "Sagar"];

const createElemetns = (arr) => {
    const htmlElemetns = arr.map(el => 
        `<span class="btn">${el}</span> `)
        console.log(htmlElemetns.join(" "));  
    
}


createElemetns(synonyms)