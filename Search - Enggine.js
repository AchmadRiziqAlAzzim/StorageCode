const search = document.getElementById("cari");

search.addEventListener("input", function() {
    const katakunci = this.value.toLowerCase();
    const barang = document.querySelectorAll("ul li");

    for (let item of barang) {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(katakunci) ? "" : "none";
    }
});
