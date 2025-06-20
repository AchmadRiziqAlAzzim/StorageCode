function ubah() {

    const jam = new Date().getHours();
    const bg = document.getElementById("latar");

    if ( jam > 6 && jam <= 15 ) {
        bg.style.backgroundColor = "rgb(0, 119, 255)"
    } else if ( jam >= 15 && jam < 18 ) {
        bg.style.backgroundColor = " #FF4500"
    } else if ( jam > 18 && jam <= 24) {
        bg.style.backgroundColor = " #191970"
    } else if ( jam >= 1 && jam <= 5 ) {
        bg.style.backgroundColor = " #191970"
}}

ubah()

setInterval(ubah, 1000)
