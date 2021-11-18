$(document).ready(function() {
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },

    });
});

$(document).ready(function() {
    $('.popupform').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#nome',


        callbacks: {
            beforeOpen: function() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#nome';
                }
            }
        }
    });
});