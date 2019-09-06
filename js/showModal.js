// https://gist.github.com/MrDys/3512455#gistcomment-2341322
$(document).ready(function(){

	//Open modal with url
	var url      	= window.location.href;
	var modal_code 	= getParameterByName("modal",url);

	if(window.location.href.indexOf('?modal='+modal_code) != -1) {
    	$('#portfolioModal'+modal_code).modal('show');
    	/*Like a query string
		http://www.website.com/page.html?modal=1
		http://www.website.com/page.html?modal=2
		...
    	*/
  	}
	
}); 

function getParameterByName(name, url) { //Obtain a value from a query string
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));

    /*EXAMPLE
	// query string: ?foo=lorem&bar=&baz
	var foo = getParameterByName('foo'); // "lorem"
	var bar = getParameterByName('bar'); // "" (present with empty value)
	var baz = getParameterByName('baz'); // "" (present with no value)
	var qux = getParameterByName('qux'); // null (absent)
    */
}