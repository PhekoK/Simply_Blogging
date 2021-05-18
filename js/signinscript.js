//Log in

var attempt = 3;
function validate() {
    var username = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;
    if (username == "" || password == "") {
        alert("Please completed the required fields.");
    } else {
        if (username == "admin" && password == "admin") {
            // alert("You are logged in successfully.")
            if (localStorage) {
                localStorage.setItem("floatingInput", username);
                location.href = "./dashboard.html";
            } else {
                alert('localStorage is disabled by browser.')
            }

        } else {
            document.getElementById('floatingInput').value = "";
            document.getElementById('floatingPassword').value = "";
            attempt--;  // attempt = attempt - 1;
            alert("Invalid credentials Your username or password are incorrect. \n You have left " + attempt + " attempt.");
            if (attempt == 0) {
                document.getElementById('floatingInput').disabled = true;
                document.getElementById('floatingPassword').disabled = true;
                document.getElementById('BtnSignIn').disabled = true;
                document.getElementById('rst').disabled = false;
            }
        }
    }
}


function resetAll() {
    attempt = 3;
    document.getElementById('floatingInput').disabled = false;
    document.getElementById('floatingPassword').disabled = false;
    document.getElementById('BtnSignIn').disabled = false;
    document.getElementById('rst').disabled = true;

}