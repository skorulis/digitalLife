
var request = $.ajax({
  url: DL.server
});

request.done(function(data) {
	alert('test');
	$('.header').after('<P>'+response+'</P>');
});

request.fail(function(jqXHR,status) {
	alert('fail ' + status);
});