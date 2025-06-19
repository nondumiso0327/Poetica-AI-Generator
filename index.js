function generatePoem(event) {
    event.preventDefault();

 new Typewriter("#poem", {
  strings: "In quiet winds the soul can hear",
  autoStart: true,
  Delay: 1,
  cursor: "",
});
}
    
let poemFormGenerator = document.querySelector("#point-generator");
poemFormGenerator.addEventListener("submit", generatePoem);
