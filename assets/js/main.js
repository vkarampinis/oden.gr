$(document).ready(function () {


    var myHeader = $('header');
    myHeader.data('position', myHeader.position());
    $(window).scroll(function () {
        var hPos = myHeader.data('position'), scroll = getScroll();
        if (hPos.top < scroll.top) {
            myHeader.parent().addClass('fixed');
        }
        else {
            myHeader.parent().removeClass('fixed');
        }
    });

    function getScroll() {
        var b = document.body;
        var e = document.documentElement;
        return {
            left: parseFloat(window.pageXOffset || b.scrollLeft || e.scrollLeft),
            top: parseFloat(window.pageYOffset || b.scrollTop || e.scrollTop)
        };
    }

});


// Twitter
!function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, "script", "twitter-wjs");