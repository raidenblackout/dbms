
window.onload = function(){
    const commentButtons = $('.post-reach .btn');
    commentButtons.on('click', function(e){
        const res=$(this).parents().filter('.post-comment-container').find('.comments');
        console.log(res);
        res.toggleClass('hidden');
    });
}

