let $loginEmail = $("#userEmail");
let $loginPassword = $("#userPassword");
let $submitBtn = $("#submitUserBtn");

let API = {
  findUser: function(credentials) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      url: "/api/login",
      type: "POST",
      data: JSON.stringify(credentials)
    });
  }
};

let userLogInSubmit = function(event) {
  event.preventDefault();
  console.log("user logged in");
  let login = {
    email: $loginEmail.val().trim(),
    password: $loginPassword.val().trim()
  };

  API.findUser(login)
    .then(function(user) {
      console.log("logged in user is", user);
      window.localStorage.setItem("user", user.username);
      window.location = "/chat-room";
    })
    .catch(function() {
      alert("Please insert correct email and password");
    });
};

$submitBtn.on("click", userLogInSubmit);
