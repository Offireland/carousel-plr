$(function() {
    var d = $(window).outerWidth();
    var e = $(window).outerHeight();
    var b = $(".codehim-topbar").height();
    var f = $(".view-switcher").find(".btn");
    var c = $(".demo-window-wrapper");
    var a = $(".demo-window");
    $(a).width(d).height(e - b);
    $(f).click(function(g) {
        g = $(this).attr("id");
        switch (g) {
        case "desktop":
            $(a).width(1440).height(900);
            $(this).addClass("active");
            $(f).not(this).removeClass("active");
            break;
        case "laptop":
            $(a).width(1280).height(720);
            $(this).addClass("active");
            $(f).not(this).removeClass("active");
            break;
        case "tablet":
            $(a).width(960).height(640);
            $(this).addClass("active");
            $(f).not(this).removeClass("active");
            break;
        case "mobile":
            $(a).width(360).height(600);
            $(this).addClass("active");
            $(f).not(this).removeClass("active");
            break;
        default:
            return
        }
    });
    $(window).resize(function() {
        d = $(window).outerWidth();
        e = $(window).outerHeight();
        $(c).width(d).height(e - b);
        $(a).width(d).height(e - b);
        $(f).removeClass("active")
    });
    $(".btn-close").click(function() {
        $(this).parent().fadeOut(500)
    })
});
