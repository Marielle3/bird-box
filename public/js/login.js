// let $loginEmail = $("#userEmail");
// let $loginPassword = $("userPassword");
// let $submitBtn = $("submitUserBtn");

// let API = {
//   findUser: function() {
//     return $.ajax({
//       url: "/api/signUp",
//       type: "GET"
//     });
//   }
// };

// let userLogInSubmit = function(event){
//   event.preventDefault();

//   let login = {
//     email: $loginEmail.val().trim(),
//     password: $loginPassword.val().trim()
//   };

//   if (login.email && login.password === )
// }
$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var loginForm = $("#login-form");
  // Adding an event listener for when the form is submitted
  $(loginForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
// Login and direct you to chat room
function submitPost(post) {
  $.post("/login", post, function() {
    window.location.href = "/chat-room";
  });
 } 
}

 function myFunction() {
  var x = document.getElementById("userPassword").value;
  document.getElementById("submitBtn").innerHTML = x;
}
  //Still need to create handleFormSubmit function objective is to get to the login page,
  //sign in and redirect you with that username to the live chat room