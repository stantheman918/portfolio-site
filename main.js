jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                '-moz-transform' : 'rotate('+ degrees +'deg)',
                '-ms-transform' : 'rotate('+ degrees +'deg)',
                'transform' : 'rotate('+ degrees +'deg)',
                'transition': 'transform 0.3s linear'});
    return $(this);
};

$(".dropdown-icon").rotate(-180);
var rotated = true;

$("#toggle-btn").click(function() {
    $("#toggle-btn + ul").slideToggle();
    if(rotated) {
        $(".dropdown-icon").rotate(0);
        rotated = false;
    }
    else {
        $(".dropdown-icon").rotate(-180);
        rotated = true;
    }
});