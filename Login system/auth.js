const registeredUsers = {};

    function showRegistrationDialog() {
      document.getElementById("loginFormBox").style.display = "none";
      document.getElementById("registerFormBox").style.display = "block";
    }

    function showLoginDialog() {
      document.getElementById("registerFormBox").style.display = "none";
      document.getElementById("loginFormBox").style.display = "block";
    }

    function register() {
      const newUsername = document.getElementById("newUsername").value;
      const newPassword = document.getElementById("newPassword").value;
      
      if (newUsername && newPassword) {
        registeredUsers[newUsername] = newPassword;
        alert("Registration successful!");
      } else {
        alert("Please fill in both username and password.");
      }
    }

    function login() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      
      if (registeredUsers.hasOwnProperty(username) && registeredUsers[username] === password) {
        document.getElementById("loginSystem").style.display = "none";
        document.getElementById("securePage").style.display = "block";
      } else {
        alert("Invalid username or password.");
      }
    }
