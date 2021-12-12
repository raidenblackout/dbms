//get date from the api localhost/test2/api.php
const html = `
<div class="post-comment-container" id="p-id-1">
    <div class="post-container">
        <div class="icon">
            <i class="fa fa-user"></i>
        </div>
        <div class="post-body">
            <div class="post-header">
                <div class="post-title">
                    {title}
                </div>
                <a class="post-user"> @{username}</a>
            </div>
            <div class="post-content">
                <div class="post-text">
                {content}
                </div>
                <div class="post-image">
                </div>
                <div class="post-video">
                </div>
            </div>
            <div class="post-footer">
                <div class="post-footer-left">
                    <div class="post-footer-icon">
                        <div class="post-votes">
                            <a  class="btn"><i class="bi bi-heart"></i><i
                                    class="bi bi-heart-fill"></i></a>
                        </div>
                        <div class="post-reach">
                            <a class="btn"><i class="bi bi-chat-left-text"></i><i
                                    class="bi bi-chat-left-text-fill"></i></a>
                            <a  class="btn"><i class="bi bi-share"> </i><i
                                    class="bi bi-share-fill"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="comments hidden">
        <div class="post-comment">
            <div class="profile-icon icon">
                <i class="fa fa-user"></i>
            </div>
            <div class="comment-body">
                <div class="comment-header">
                    <div class="comment-title">
                        <a class="comment-user">@{username}</a>
                    </div>
                </div>
                <div class="comment-content">
                    <div class="comment-text">
                        <textarea class="form-control" placeholder="Write a comment..."></textarea>
                    </div>
                    <div class="comment-image">
                    </div>
                    <div class="comment-video">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
function getData() {
    $.ajax({
        url: "http://103.152.107.131/test2/api.php",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var output = "";
            $.each(data, function (key, value) {
                output += html.replaceAll("{title}", value.title)
                    .replaceAll("{username}", value.username)
                    .replaceAll("{content}", value.content);
            });
            $("#container1").append(output);
            attacher();
        }
    });
}
$(document).ready(function () {
    getData();
});