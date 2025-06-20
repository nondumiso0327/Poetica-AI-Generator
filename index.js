function displayPoem(response) {
    console.log(" Poem generated")
 new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  Delay: 1,
  cursor: "",
});   
}

function generatePoem(event) {
    event.preventDefault();
    let userInput=document.querySelector("#user-input")
    let apiKey = "0bb5f9a7fet7eb24e30d522obf46e44c";
    let prompt = `Instructions are Generatea poem about ${userInput.value}`;
    let context = "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
     
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    


    axios.get(apiUrl).then(displayPoem);

 
}
    
let poemFormGenerator = document.querySelector("#point-generator");
poemFormGenerator.addEventListener("submit", generatePoem);
