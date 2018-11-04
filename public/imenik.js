// JavaScript Document
$(document).ready(function(){

$('#pozadina').attr('src','http://www.gunainsaat.com/wp-content/uploads/2013/04/Wordpress-Background-Blue-Light.jpg');
$('body').css('display', 'none');
$('body').fadeIn(1500);

});
	var images = [
  "https://www.pixelstalk.net/wp-content/uploads/2016/07/Desktop-Best-Plain-Photos.jpg",
  "http://desktop-backgrounds-org.s3.amazonaws.com/plain-high-definition.jpg",
  "http://www.gunainsaat.com/wp-content/uploads/2013/04/Wordpress-Background-Blue-Light.jpg"
];

	var i = 1;
setInterval(function() {
   $('#pozadinaa').fadeOut(500, function(){
      $(this).attr('src',images[i]).bind('onreadystatechange load', function(){
         if (this.complete) 
			{ $(this).fadeIn(500);
			}
      });
   });
 i = i + 1;
      if (i === images.length) {
        i =  0;
      }
	
}, 5000);
