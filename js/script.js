/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function(){
   
    jQuery('a[href^="#"]').click(function(e) {

        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top}, 1000);
        $('#domatexpanded').removeClass("modalopened")

        return false;

        e.preventDefault();

    });

    // tipewriter by roXon //

    var $el = $('#writer'),
    txt = $el.text(),
    txtLen = txt.length,
    timeOut,
    char = 0;

    $el.text('|');

    (function typeIt() {   
        timeOut = setTimeout(function() {
            char++;
            var type = txt.substring(0, char);
            $el.text(type + '|');
            typeIt();

            if (char == txtLen) {
                $el.text($el.text().slice(0, -1)); // remove the '|'
                clearTimeout(timeOut);
            }

        }, 50);
    }());
    
    setTimeout( function(){ 
        $("#and").removeClass("none")
        var $el = $('#and'),
        txt = $el.text(),
        txtLen = txt.length,
        timeOut,
        char = 0;

        $el.text('|');

        (function typeIt() {   
            timeOut = setTimeout(function() {
                char++;
                var type = txt.substring(0, char);
                $el.text(type + '|');
                typeIt();

                if (char == txtLen) {
                    $el.text($el.text().slice(0, -1)); // remove the '|'
                    clearTimeout(timeOut);
                }

            }, 50);
        }());
    }  , 700 );
    
    setTimeout( function(){ 
        $("#beautiful").removeClass("none")
        var $el = $('#beautiful'),
        txt = $el.text(),
        txtLen = txt.length,
        timeOut,
        char = 0;

        $el.text('|');

        (function typeIt() {   
            timeOut = setTimeout(function() {
                char++;
                var type = txt.substring(0, char);
                $el.text(type + '|');
                typeIt();

                if (char == txtLen) {
                    $el.text($el.text().slice(0, -1)); // remove the '|'
                    clearTimeout(timeOut);
                }

            }, 50);
        }());
    }  , 1000 );
    
    var waypoint = new Waypoint({
      element: document.getElementById('screen2'),
      handler: function(direction) {
        $("#bottomcolumn").removeClass("none").css("animation", "moveup 2s");
        $("#topcolumn").removeClass("none").css("animation", "moveup 2s");;  
      },
    offset: 200 
    })
    
    var waypoint = new Waypoint({
      element: document.getElementById('brandingcard'),
      handler: function(direction) {
        $("#leftcolumn").removeClass("none").css("animation", "moveside 2s");
        $("#rightcolumn").removeClass("none").css("animation", "moveside 2s");;  
      },
    offset: 200 
    })

    $(function() {
        var div = $('#orangecircle');
        var width = div.width();
        div.css('height', width);
    });

    $('#domatcard').click(function() {
         $('#domatexpanded').addClass("modalopened")
         $("body").addClass("noscroll");
    });
    
    $('#scrim').click(function() {
         $('#domatexpanded').removeClass("modalopened")
         $("body").removeClass("noscroll");
    });
});

$(window).on('resize', function() {
    var div = $('#orangecircle');
    var width = div.width();
    div.css('height', width);
});