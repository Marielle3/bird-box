// Using IIFE for Implementing Module Pattern to keep the Local Space for the JS Variables
(function() {
  // Enable pusher logging - don't include this in production
  Pusher.logToConsole = true;

  var serverUrl = "/",
    // eslint-disable-next-line no-unused-vars
    comments = [],
    pusher = new Pusher("d2c5476b684157236731", {
      cluster: "us3",
      encrypted: true
    }),
    // Subscribing to the 'flash-comments' Channel
    channel = pusher.subscribe("flash-comments"),
    commentForm = document.getElementById("comment-form"),
    commentsList = document.getElementById("comments-list");
  // commentTemplate = document.getElementById("comment-template");

  // Binding to Pusher Event on our 'flash-comments' Channel
  channel.bind("new_comment", newCommentReceived);

  // Adding to Comment Form Submit Event
  commentForm.addEventListener("submit", addNewComment);

  // New Comment Receive Event Handler
  // We will take the Comment Template, replace placeholders & append to commentsList
  function newCommentReceived(data) {
    console.log(data);
    commentNode = document.createElement("div");
    commentNode.classList.add("comment");
    commentNode.innerHTML = commentTemplate(data);
    commentsList.appendChild(commentNode);
  }

  // displays the live comment feed
  function commentTemplate({ name, email, comment }) {
    return `
    <div class="user-icon">
        <img src="./styles/images/userLogo.jpg" />
    </div>
    <div class="comment-info">
        <div class="row">
            <div class="name"> ${name}</div>
            <div class="email">${email}</div>
        </div>
        <div class="row">
            <div class="text">${comment}</div>
        </div>
    </div>
                        `;
  }

  function addNewComment(event) {
    event.preventDefault();
    var newComment = {
      name: document.getElementById("new_comment_name").value,
      email: document.getElementById("new_comment_email").value,
      comment: document.getElementById("new_comment_text").value
    };

    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line prettier/prettier
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", serverUrl + "comment", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
      // eslint-disable-next-line eqeqeq
      if (xhr.readyState != 4 || xhr.status != 200) {
        return;
      }

      // On Success of creating a new Comment
      console.log("Success: " + xhr.responseText);
      commentForm.reset();
    };
    xhr.send(JSON.stringify(newComment));
  }
})();
