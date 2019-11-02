let $registerEmail = $("#inputEmail");
let $registerPassword = $("#inputPassword");
let $registerUsername = $("#inputUserName");
let $submitBtn = $("#registerBtn");

let API = {
  saveRegistration: function(registration) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/signUp",
      data: JSON.stringify(registration)
    });
  }
};

let userCreateSubmit = function(event) {
  event.preventDefault();
  console.log("inside event listener");
  let registration = {
    email: $registerEmail.val().trim(),
    password: $registerPassword.val().trim(),
    username: $registerUsername.val().trim()
  };

  if (!(registration.email && registration.password && registration.username)) {
    alert("You must enter into these fields!");
    return;
  }

  API.saveRegistration(registration).then(function(res) {
    window.location = "/login";
    console.log("response is: ", res);
  });
  $registerEmail.val("");
  $registerPassword.val("");
  $registerUsername.val("");
};

$submitBtn.on("click", userCreateSubmit);
