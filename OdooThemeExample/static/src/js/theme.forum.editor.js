/*odoo.define('theme.forum.editor', function(require){
    'use strict';
	//test
    //var options = require('web_editor.snippets.options');
	
	var core = require('web.core');
	var base = require('web_editor.base');
	// header fix
*/
	$(window).scroll(function(){
    if ($(window).scrollTop() >= 110) {
       $('.navbar-irvas').addClass('navbar-fixed-top');
    }
    else {
       $('.navbar-irvas').removeClass('navbar-fixed-top');
    }
});
/*
});
*/
