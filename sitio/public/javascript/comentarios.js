
var defaultAvatar = "../images/users/avatar_default.png";
var guestuserId = Math.floor(Math.random() * (150 - 10 + 1)) + 10;
var guestusername = "";

function stopLoader() {
$(".loader").fadeOut("slow", function() {
$(".comments .inner").fadeIn("slow");
});
}

function likecountinc(pos) {
var x = document.getElementById(`LikeSpan-${pos}`).innerHTML;
document.getElementById(`LikeSpan-${pos}`).innerHTML = x * 1 + 1;  
}

function dislikecountinc(pos) {
var x = document.getElementById(`DislikeSpan-${pos}`).innerHTML;
document.getElementById(`DislikeSpan-${pos}`).innerHTML = x * 1 + 1;
}

$(function() {
var allComments = [
{
userid: "1",
name: "Claudia",
avatar: "default",
before: "Hace 5 minutos",
message: "Hermoso articulo!"
}
];

var loaded = 0;

$.each(allComments, function(i, val) {
var comment = $('<div class="comment"></div>');
var avatar = this.avatar == "default" ? defaultAvatar : this.avatar;
$('<img class="avatar" alt="avatar" src="' + avatar + '" />').appendTo(
comment
);
var contents = $('<div class="body"></div>');
$(
'<a class="user-coment" href="./users/' +
this.userid +
'/" target="_blank">' +
this.name +
"</a>"
).appendTo(contents);
$("<span> • " + this.before + "</span><br /><br />").appendTo(contents);
$("<p>" + this.message + "</p>").appendTo(contents);

contents.appendTo(comment);
comment.appendTo(".comments .inner");
loaded++;
});

if (loaded == allComments.length) stopLoader();

$(".send-msg").click(function() {
var name = $(".your-name").val();
var msg = $(".your-msg").val();
var comment = $('<div class="comment" style="display: none;"></div>');
var contents = $('<div class="body"></div>');

if ((name === "" && guestusername === "") || msg === "") return false;
guestusername = guestusername === "" ? name : guestusername;
$(".your-msg").val("");

$(".your-name")
.fadeOut()
.remove();
$(".your-msg").before(
'<div class="input your-name dived">' + guestusername + "</div>"
);

$(
'<img class="avatar" alt="avatar" src="' + defaultAvatar + '" />'
).appendTo(comment);
$(
'<a href="./users/' +
guestuserId +
'/" target="_blank">' +
guestusername +
"</a>"
).appendTo(contents);
$("<span> • Right now</span><br /><br />").appendTo(contents);
$("<p>" + msg + "</p>").appendTo(contents);

console.log('aabbcc');
contents.appendTo(comment);
$(".add-new").after(comment);
comment.fadeIn("slow");
});
});

