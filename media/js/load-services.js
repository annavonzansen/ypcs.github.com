function load_script(d, s, id, url) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.async = true;
        js.src = url;
        fjs.parentNode.insertBefore(js, fjs);
    }
}

(load_script(document, "script", "twitter-wjs", "https://platform.twitter.com/widgets.js"));
(load_script(document, "script", "twitter-widget", "http://widgets.twimg.com/j/2/widget.js"));
(load_script(document, "script", "google-plusone", "https://apis.google.com/js/plusone.js"));
(load_script(document, "script", "facebook-jssdk", "https://connect.facebook.net/en_US/all.js#xfbml=1&appId=479137325447561"));