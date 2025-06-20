function tema3() {
    const button = document.getElementById("btn-cb");
    const bg2 = document.getElementById("latar2");

    if (button.checked) {
        bg2.style.backgroundColor = "rgb(255, 255, 255)"
    } else {
        bg2.style.backgroundColor = " #061327"
    }
}
