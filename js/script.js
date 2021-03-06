var selectedRow = null;
//post date
var d = new Date();
document.getElementById('post-date-author').innerHTML = d + ` by ` + localStorage.getItem('floatingInput');

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

//SELECT PREVIEW PHOTO - postArticle.html
function preview_image(event){
    var reader =new FileReader();
    reader.onload = function()
    {
        var output = document.getElementById('output_image');
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
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

  //Comments Section
  window.onclick = function(e)
    {   var id =  e.target.id;   
     if (id === 'sent')  
     {

        var txt = document.getElementById('example').value   
                 + "\n </br> Posted by " + localStorage.getItem('floatingInput') + `</br><a class="btn btn-sm btn-danger" onClick="onDeleteComment(this)">Delete</a>
                 <a class="btn btn-sm btn-secondary" onClick="onEdit(this)">Edit</a><a class="btn btn-sm btn-secondary" onClick="reply(this)">Reply</a>`;  
        $( "#para" ).empty().append( txt );
       
     }
    }

    function resetForm() {
      document.getElementById('example').value = "";
      selectedRow = null;
  }



    function onDeleteComment(data){
      if (confirm('Are you sure you want to delete this comment? ')) {
        var currentRow = data.parentElement.parentElement;
        document.getElementById('post_id').deleteRow(currentRow.rowIndex);
        resetForm();
    }
    }


    /**Add new Blog */