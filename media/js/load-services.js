/* Twitter */
!function(d,s,id){
	var js, fjs=d.getElementsByTagName(s)[0];
	if (!d.getElementById(id)) {
		js=d.createElement(s);
		js.id=id;
		js.async=true;
		js.src="https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document,"script","twitter-wjs");

/* Google +1 */
(function() {
	var po = document.createElement('script');
	po.type = 'text/javascript';
	po.async = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(po, s);
})();

/* Facebook */
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
  	js = d.createElement(s);
	js.id = id;
  	js.async = true;
  	js.src = "https://connect.facebook.net/en_US/all.js#xfbml=1&appId=203639063004777";
  	afjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));