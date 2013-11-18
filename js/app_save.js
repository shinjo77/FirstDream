var saveContnet = Backbone.Model.extend({
	defaults: {
		subject: '',
		content: ''
	}
});

var saveView = Backbone.View.extend({
	el: $('#this_content'),
	events: {
		"click #save": "saveContent",
		"click #get": "getContent",
		"click #clear": "clearContent"
	},
	initialize: function(){
		_.bindAll(this, 'saveContent', 'getContent');
		
				
	},
	saveContent: function(){
		var subject = $("#subject").val();
		var textContent = $("#textContent").val();
		
		console.log(subject);
		console.log(textContent);
		
		localStorage.setItem(subject, textContent);
	},
	getContent: function(){
		//localStorage.getItem("bar", foo);
		localStorage.getItem(test, textContent);
		for(var i in localStorage)
		{
			console.log(localStorage[1]);
		}
	},
	clearContent: function(){
		localStorage.clear();
	}
	
});

var saveview = new saveView();

/*
$("#signin").on( "click", function() {
  alert( '' );
});*/