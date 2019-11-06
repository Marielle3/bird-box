let $loginEmail = $("#userEmail");
let $loginPassword = $("#userPassword");
let $submitBtn = $("#submitUserBtn");

let API = {
  findUser: function(credentials) https://github.com/Marielle3/project_2/pull/28/conflict?name=views%252Flogin.handlebars&ancestor_oid=79591ba7663ea4dc779643e0f0b8ab735dc80fb9&base_oid=0f0712c5a9fb1bf803f0d5bc0ecb802eea717278&head_oid=ecb99745a5fee5c8ba7e084c6bf725e37618dc3c{
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
      window.localStorage.setItem("user", user.email);
      window.location = "/chat-room";
    })
    .catch(function() {
      alert("Please insert correct email and password");
    });
};


