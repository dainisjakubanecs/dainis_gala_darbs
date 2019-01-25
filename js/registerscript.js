var password = document.getElementById("password")
var confirmPassword = document.getElementById("re_password");
// var mySubmit = document.getElementById("submit_button");

// Password validation function

function validatePassword() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity('Paroles nesakrīt!');
    } else {
        confirmPassword.setCustomValidity('');
    }
}

password.onchange = function () {
    validatePassword()
};

confirmPassword.onkeyup = function () {
    validatePassword()
};

// Select Box color change

function changeMe(sel) {
    sel.style.color = "black";
}

// submit form messages

function submitForm() {
    var confirmBox = confirm('Vai Jūs vēlaties apstiprināt reģistrācijas formu?');
    
    if (confirmBox == true) { 
        alert('Reģistrācija veiksmīga!');
        $('#submit_button').prop('disabled', true);
        return true;

    } else {
        alert('Reģistrācija atcelta!');
        return false;
    }
}


