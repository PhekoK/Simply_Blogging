//post date
var d = new Date();
document.getElementById('post-date-author').innerHTML = d;

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
            alert("Invalid credentials. \n You have left " + attempt + " attempt.");
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

//WELCOME MESSAGE AFTER LOGGING IN
window.onload = function () {
    if(localStorage){
        if(document.getItem('floatingInput')) {
            document.getElementById('welcomeMessage').textContent = "Hello " + localStorage.getItem('floatingInput');
        } else{
            location.href = './login.html';
        }
    }
}

function logout(){
    localStorage.clear();
    location.href = './login.html';
}

//SELECT PREVIEW PHOTO
function preview_image(event){
    var reader =new FileReader();
    reader.onload = function()
    {
        var output = document.getElementById('output_image');
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}