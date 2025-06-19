function generatePoem(event) {
    event.preventDefault();

    alert("generating poem");
}
    
let poemFormGenerator = document.querySelector("#point-generator");
poemFormGenerator.addEventListener("submit", generatePoem);
