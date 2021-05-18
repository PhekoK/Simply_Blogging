//post date
var d = new Date();
document.getElementById('post-date-author').innerHTML = d;

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
        if(localStorage.getItem('floatingInput')) {
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


//CONTACT ME PAGE FOR VALIDATION

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
  function forwardMessage(){
     
        alert('Your Message has been submitted. You will here from us soon.');
     
      
  }

  //READ MORE FUNCTION
  function myReadmoreFunction1() {
    var dots = document.getElementById("param1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myReadmoreFunction2() {
    var dots = document.getElementById("param2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myReadmoreFunction3() {
    var dots = document.getElementById("param3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myReadmoreFunction4() {
    var dots = document.getElementById("param4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myReadmoreFunction5() {
    var dots = document.getElementById("param5");
    var moreText = document.getElementById("more5");
    var btnText = document.getElementById("myBtn5");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myReadmoreFunction6() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function continueReading(){

  }