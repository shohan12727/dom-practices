const parent = document.getElementById('parent');
console.log(parent.childNodes);
console.log(parent.children);


document.getElementById('mylist').addEventListener('click', function (e) {
    // console.log(e.target.tagName);
    if (e.target.tagName === 'LI') {
        alert('You Clicked ' + e.target.innerText)
    }

})