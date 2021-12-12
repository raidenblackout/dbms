const commentButtons = document.getElementsByClassName("post-reach").getElementsByClassName("btn");
function toggleComments(e){
    //get the button
    let button = e.target;
    //get the post id
    console.log(e);
}
window.onload = function(){
    //for each comment button
    commentButtons.forEach(function(button){
        //add event listener
        button.addEventListener("click", toggleComments);
    });
}

