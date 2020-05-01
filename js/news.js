function resizeHotNews() {
    var $ = jQuery.noConflict();
    var maxImg = $("#img-0").height();
    //var maxImg = 315;
    var imgHeight = $(".hot-news .left img").height();
    if (imgHeight > maxImg || imgHeight < maxImg)
        imgHeight = maxImg;
    $(".box-img").attr("style", "max-height:" + maxImg + "px !important");
	var leftHeight = imgHeight + $(".hot-news .left .des").height() + 20;
	var maxHeight = leftHeight > $(".hot-news .media").height() ? leftHeight : $(".top .media").height();
	var mediaHeight = $(".top .media").height();
    maxHeight = maxHeight > mediaHeight ? maxHeight : mediaHeight;
	$(".hot-news .left, .hot-news .right, .top .media").height(maxHeight);

	$(".hot-news .right .ct").height(leftHeight - 30);
	$(".hot-news .right .ct").mCustomScrollbar();
	
	//var titBottom = $(".hot-news .left .des").height() +20;
	//$(".hot-news .tit").css("bottom", titBottom + "px");
}
function imageExists(image_url) {
    //var http = new XMLHttpRequest();
    //try {
    //    if (image_url.indexOf("http://") < 0) {
    //        http.open('HEAD', "http://" + window.location.host + image_url, false);
    //    } else {
    //        http.open('HEAD', image_url, false);
    //    }
    //    http.send();
    //} catch (err) {
    //    return image_url;
    //}
    //if (http.status == 404) {
    //    return "/Resources/img/no-image-news.jpg";
    //}
    return image_url;
}



// news
var n = 0; var interval;
var index = 0;
jQuery(document).ready(function () {
        
    jQuery('#featured .rights li a').click(function () {
        return true;
    });
    n = jQuery('#featured .rights li').length;
    LoadFocus();
    interval = setInterval("LoadFocus()", 500000);
    jQuery('#featured .rights li a').each(function (i) {
        jQuery(this).hover(function () {
            clearInterval(interval);
            index = i;
            LoadFocus();
        }, function () {
            interval = setInterval("LoadFocus()", 500000);
        });
        jQuery(this).click(function () {
            var link = jQuery(this).attr('href');
            window.location.href = link;
        });
    });
});
function LoadFocus() {
        
    if (index >= 0) {
        var item = jQuery('#featured .rights li').eq(index);
        var img = jQuery(item).find('a').attr('aria-label');
        var Des = jQuery(item).find('a').attr('aria-valuetext');
        var link = jQuery(item).find('a').attr('href');
        var time = jQuery(item).find('span').html();
        var title = jQuery(item).find('a').html();
        img = imageExists(img);
        jQuery('#featured .rights li a').removeClass('actived');
        jQuery('#featured .rights li').eq(index).find('a').addClass('actived');
        jQuery('#featured .lefts').hide().html("<div class=\"box-img\"><img src=\"" + img + "\" /><div class=\"tit\"><a href=\"" + link + "\">" + title + "</a></div> </div><div class=\"des\"><p class=\"time\">" + time + "</p><div class=\"ct\">" + noscript(Des) + "</div></div>").toggle();
        index++;
        if (index == n) index = 0;
    }
}
function noscript(strCode) {
    var div = document.createElement('div');
    div.innerHTML = strCode;
    var scripts = div.getElementsByTagName('script');
    var i = scripts.length;
    while (i--) {
        scripts[i].parentNode.removeChild(scripts[i]);
    }
    return div.innerHTML;
}