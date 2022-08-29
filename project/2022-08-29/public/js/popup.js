jQuery(function($){
    // Lightbox Triggers
    lightboxTrigger(".open-popup-link", ".popup-modal");
});



function lightboxTrigger(link, object) {
    var target = $(".open-popup-link").attr("href");
    $(link).on("click", function(event) {
        event.preventDefault();
        $(target).wrap( "<div class='lightbox'></div>" );
        $(".lightbox").fadeIn(300, function() {
            $(target).fadeIn(0);
            $("body").addClass("modal-open");
        });
    
        $("body").on("click", function(event) {
            if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                $(".lightbox").fadeOut(300, function() {
                    $(target).hide(0);
                    $(target).unwrap();
                });
                $("body").removeClass("modal-open");
            }
        });
    });
}