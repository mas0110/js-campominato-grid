let grigliahtml = document.querySelector(".griglia");

document.getElementById("play").addEventListener("click", function() {

    for (let i = 0; i < 100; i++) {

        let box = document.createElement("div");

        box.classList.add("box");

        grigliahtml.appendChild(box);
    }

}
);
