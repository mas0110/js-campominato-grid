let grigliahtml = document.querySelector(".griglia");

document.getElementById("play").addEventListener("click", function() {

    for (let i = 1; i <= 100; i++) {

        let box = document.createElement("div");

        box.classList.add("box");

        grigliahtml.appendChild(box);

        box.innerText = i 

        box.addEventListener("click", function(){

            this.classList.toggle("active")

            console.log(i)

        }
        )
    }

}
);
