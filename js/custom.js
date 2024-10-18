$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });

    const T1 = new Swiper(".t1_official_unform .slide_area", {
        slidesPerView: 3,
        spaceBetween: 8,
        navigation: {
            nextEl: '#main_t1_official_unform .t1_official_unform_arrows .swiper-button-next',
            prevEl: '#main_t1_official_unform .t1_official_unform_arrows .swiper-button-prev',
        },
    });
})