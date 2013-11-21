var Login = Backbone.Model.extend({
	defaults: {
		email: 'test@test.com',
		pw: 'test'
	},
	el: $('#this_content'),
	
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
	el: $('#this_content'),
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
			$(this.el).html(contentTemplate); //this is to test
			//$(this.el).html('<h1>Please check you login</h1>');
		} else {
			$(this.el).html('<h1>Pleasae check you login</h1>'); //this is to test
			//$(this.el).html(contentTemplate);
		}
	}
});

var loginview = new LoginView();

/*
$("#signin").on( "click", function() {
  alert( '' );
});*/