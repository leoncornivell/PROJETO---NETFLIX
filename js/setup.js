
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

function ventana_assist() {
    window.open("./ventanass.html", "Munna Michael", "width=650, height=500, scrollbars=NO");
    centerscreen = yes;
}