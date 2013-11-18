var Login = Backbone.Model.extend({
	defaults: {
		email: 'test@test.com',
		pw: 'test'
	},
	el: $('.container'),
	
	initialize: function(){
		this.render();
	},
	render: function(){
		var source = $("#login_template").html();
		var template = Handlebars.compile(source);
		$(this.el).html(template);
	},
});

var LoginView = Backbone.View.extend({
	el: $('.container'),
	events: {
		"click #signin": "doCheck"
	},
	initialize: function(){
		_.bindAll(this, 'doCheck');
		
		var login = new Login();
		this.login = new Login();
		this.getid = login.get("email");
		this.getpw = login.get("pw");
		this.thisid = $("#inputEmail").val();
		this.thispw = $("#inputPassword").val();
		
	},
	doCheck: function( event ){
		// Button clicked, you can access the element that was clicked with event.currentTarget
		var self = this;
		var contentTemplateSource = $("#content_template").html();
		var contentTemplate = Handlebars.compile(contentTemplateSource);
		
		
		if( (this.thisid !== this.getid) && (this.thispw !== this.getpw)){
			$(this.el).html(contentTemplate);
		} else {
			$(this.el).html('<p>Pleasae check you login</p>');
		}
	}
});

var loginview = new LoginView();

/*
$("#signin").on( "click", function() {
  alert( '' );
});*/