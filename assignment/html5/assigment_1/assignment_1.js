function Validate() {
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("cpass").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}