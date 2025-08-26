document.getElementById('post_comment').addEventListener('click', function () {
    const getComment = document.getElementById('get_comment');
    const valueGetComment = getComment.value;

    const commentContainer = document.getElementById('comment_container');
    // creation of p 

    const commentElement = document.createElement('p');
    //  add css 
    commentElement.classList.add('comment');
    commentElement.innerText = valueGetComment;


    // append 
    commentContainer.appendChild(commentElement)

    // reset all 
    getComment.value = '';

})
