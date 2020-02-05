$(document).ready(function(){
    nsBlackHoll();
    astonMartin();
    portfolio();
});

function nsBlackHoll(){
    $("#nsBlackHoll").click(function(){
        $(".portfolIMG1").css("display", "block");
        $(".portfolIMG2").css("display", "none");
        $(".portfolIMG3").css("display", "none");
        $(".portfolText1").css("display", "block");
        $(".portfolText2").css("display", "none");
        $(".portfolText3").css("display", "none");
    });
}

function astonMartin(){
    $("#astonMartin").click(function(){
        $(".portfolIMG1").css("display", "none");
        $(".portfolIMG2").css("display", "block");
        $(".portfolIMG3").css("display", "none");
        $(".portfolText1").css("display", "none");
        $(".portfolText2").css("display", "block");
        $(".portfolText3").css("display", "none");
    });
}

function portfolio(){
    $("#portfol").click(function(){
        $(".portfolIMG1").css("display", "none");
        $(".portfolIMG2").css("display", "none");
        $(".portfolIMG3").css("display", "block");
        $(".portfolText1").css("display", "none");
        $(".portfolText2").css("display", "none");
        $(".portfolText3").css("display", "block");
    });

    (function (global, $) {

        var $menu     = $('.wrap header ul li'),
            $contents = $('.scroll'),
            $doc      = $('html, body');
        $(function () {
    
            $menu.on('click','a', function(e){
                var $target = $(this).parent(),
                    idx     = $target.index(),
                    section = $contents.eq(idx),
                    offsetTop = section.offset().top;
                $doc.stop()
                        .animate({
                            scrollTop :offsetTop
                        }, 800);
                return false;
            });
        });
    
        $(window).scroll(function(){
    
            var scltop = $(window).scrollTop();
    
            $.each($contents, function(idx, item){
                var $target   = $contents.eq(idx),
                    i         = $target.index(),
                    targetTop = $target.offset().top;
    
                if (targetTop <= scltop) {
                    $menu.removeClass('on');
                    $menu.eq(idx).addClass('on');
                }
                if (!(0 <= scltop)) {
                    $menu.removeClass('on');
                }
            })
    
        });
    
        var btnTop = $('.btn-top');
        btnTop.on('click','a', function(e){
            e.preventDefault();
            $doc.stop()
                    .animate({
                        scrollTop : 0
                    },800)
        });
    
    }(window, window.jQuery));
}