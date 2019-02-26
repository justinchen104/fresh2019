$(function() {

    TweenMax.set($('.section3 .com-des-box .left-box'), {
        rotationY: 0,
        rotationX: 0,
        rotationZ: 0,
        transformPerspective: 1000
    });
    $('.section3 .com-des-box .left-box').mouseover(function() {
        $('.section3 .com-des-box .left-box').mousemove(function(e) {
            var x = e.pageX - $(this).offset().left
              , y = e.pageY - $(this).offset().top;

            var px = x / $(this).width()
              , py = y / $(this).height();
            var xx = -30 + (60 * px)
              , yy = 30 - (60 * py);

            //TweenMax.killTweensOf($(this));
            TweenMax.to($(this), 0.7, {
                rotationY: xx,
                rotationX: yy,
                rotationZ: 0,
                transformPerspective: 1000,
                ease: Quad.easeOut
            });
        });
    }).mouseout(function() {
        $(this).unbind('mousemove');
        //TweenMax.killTweensOf($(this));
        TweenMax.to($(this), 0.7, {
            rotationY: 0,
            rotationX: 0,
            rotationZ: 0,
            transformPerspective: 1000,
            ease: Quad.easeOut
        });
    });


})

