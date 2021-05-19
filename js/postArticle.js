/* var AddBlogView = Parse.View.extend({
    template: Handlebars.compile($('#add-tpl').html()),
    render: function () {
        this.$el.html(this.template());
    }
})

WelcomeView = Parse.View.extend({
    template: Handlebars.compile($('#welcome-tpl').html()),
    events: {
        'click .add-blog': 'add'
    },
    add: function () {
        alert('Clicked');
    }
}) */

//Add New Blog

window.onclick =  function(e) {
    var id = e.target.id;
    if(id === 'btnSubmitMsg'){

        var auth = localStorage.getItem('floatingInput');
        var title = document.getElementById('blog-title').value;
        var text = document.getElementById('blog-content').value;
        

        location.href = './AllPosts.html';
        $('#new-blog-title').empty().append(title);
        $('#new-blog-cont').empty().append(text);
    }
}