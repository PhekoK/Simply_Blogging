
//Add New Blog
function sendBlog(){
    if(localStorage){
        $(document).ready(function () {
            $(".btnSubmitMsg").click(function () {
                //Get blog content and title
                var title = $('#blog-title').val();
                var cont = $('#blog-content').val();
                //store to local storage
                localStorage.setItem(`<h3 id="new-blog-title">`+title +`</h3>`);
                alert('Hurray! You Posted your blog');
                localStorage.setItem(`<h3 id="new-blog-cont">`+cont +`</h3>`);
                alert('Hurray! You Posted your blog');
            })
            //Retrieve Your Data
            $(".btnSubmitMsg").click(function () {
                var txt = document.getElementById('blog-title').value   
                 + "\n </br> Posted by " + localStorage.getItem('floatingInput'); 
                $( "#new-blog-title" ).empty().append( txt );
                var contt = document.getElementById('blog-content').value + `</br><a class="btn btn-sm btn-danger" onClick="onDeleteComment(this)">Delete</a>
                <a class="btn btn-sm btn-secondary" onClick="onEdit(this)">Edit</a><a class="btn btn-sm btn-secondary" onClick="reply(this)">Reply</a>`;
                $("#new-blog-cont").empty().append(contt);

            })
        })
    }
    else{
        alert("Oops! Error posting your blog");
    }
    
}