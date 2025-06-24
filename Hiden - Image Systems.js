   const btn24 = document.getElementById("btn-cb2");

        btn24.addEventListener("change", function() {
            if (btn24.checked) {
                document.getElementById("gambar11").style.display = "none";
            } else {
                document.getElementById("gambar11").style.display = "block";
            }
        });
