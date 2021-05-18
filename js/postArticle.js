var AddBlogView = Parse.View.extend({
    template: Handlebars.compile($('#add-tpl').html()),
    render: function(){
        this.$el.html(this.template());
    }
})

WelcomeView = Parse.View.extend({
    template: Handlebars.compile($('#welcome-tpl').html()),
    events: {
        'click .add-blog' : 'add'
    },
    add: function(){
        alert('Clicked');
    }
})