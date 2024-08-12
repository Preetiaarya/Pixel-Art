
let container = document.querySelector(".container")


for (let i = 0; i < 100; i++) {
    let child = document.createElement("div")
    child.classList.add("child")
    container.appendChild(child)
    // console.log(child)
    child.addEventListener("click", () => {
        if (child.style.backgroundColor === "white") {
            child.style.backgroundColor = "black"
        } else {
            child.style.backgroundColor = "white"
        }
    }) 
}















// $(document).ready(function(){
//     $("child").toggle(
//         function(){$("child").css({"color": "white"});
//     });
//   });

