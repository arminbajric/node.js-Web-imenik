// JavaScript Document
$(document).ready(function(){

$('#pozadina').attr('src','http://www.gunainsaat.com/wp-content/uploads/2013/04/Wordpress-Background-Blue-Light.jpg');
$('body').css('display', 'none');
$('body').fadeIn(1500);

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
var value = readCookie('Email');
$('#user').val(value);
});

	

