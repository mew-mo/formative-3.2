(function() {

// login function to work with, i just needed to declare the session storage stuff

// user login
$('#loginBtn').click(function() {
  event.preventDefault();
  let username = $('#loginUser').val();
  let password = $('#loginPass').val();

  console.log(username, password); //remove after dev for securityyyy

  if (username === '' || password === '') {
    alert('Please enter all of your details.');
  } else {
    $.ajax({
      url: `${url}/loginUser`,
      type: 'POST',
      data: {
        username: username,
        password: password
      },
      success: function(user) {
        console.log(user);

        if (user == 'Error: User not found. Please register') {
          alert('User not found: Please register as a new user or enter the correct details.');
        } else if (user == 'Error: Not authorized') {
          alert('Please try again with correct details.');
          $('#loginUser').val('');
          // field where they type the username (u can rename the variables here)
          $('#loginPass').val('');
          // field where they type the password
        } else {
          // session storage
          sessionStorage.setItem('userID', user._id);
          sessionStorage.setItem('userName', user.username);
          sessionStorage.setItem('userEmail', user.email);
          sessionStorage.setItem('passWord', user.password);
        } //else
      } //success
    }); //ajax ends
  } // else ends
}); //login click ends

// USERS.HTML JS --------------------

document.querySelector('#logoutBtn').addEventListener('click', () => {
  sessionStorage.clear();
  alert('You have been logged out.');
  window.location.href = 'index.html';
}, false);
// logout ENDS

document.querySelector('#editUserBtn').addEventListener('click', () => {
  $('#editUserModal').modal('show');
}, false);

// USERS.HTML JS ENDS --------------------

}());
// iife ENDS
