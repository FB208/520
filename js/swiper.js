var swiper = new Swiper('.swiper-container-loveher1', {
    pagination: '.swiper-pagination-loveher1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-loveher2', {
    pagination: '.swiper-pagination-loveher2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-loveher3', {
    pagination: '.swiper-pagination-loveher3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-loveher3',
    prevButton: '.swiper-button-prev-loveher3'
});