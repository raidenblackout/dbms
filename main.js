
 function attacher(){
    const commentButtons = $('.post-reach .btn');
    console.log(commentButtons);
    commentButtons.on('click', function(e){
        const res=$(this).parents().filter('.post-comment-container').find('.comments');
        res.toggleClass('hidden');
    });
}

window.onload = attacher;