// pada saat di klik link
$('.page-scroll').on('click', function (e) {

    // ambil isi dari href
    var tujuan = $(this).attr('href');
    // tanggkap elemen dari clas
    var elementujuan = $(tujuan);

    // animasi scrol
    $('body').animate({
        scrollTop: elementujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});