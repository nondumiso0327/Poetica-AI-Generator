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
    let context = "you are a romantic poem expect and you love to write short poems and you must generate a four line poem and start on a New line for each sentence. Please make sure you follow these instructions";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
     
    console.log("Generating poem")
    console.log(`Prompt:${prompt}`)
    console.log(`Context:${context}`)
    axios.get(apiUrl).then(displayPoem);

 
}
    
let poemFormGenerator = document.querySelector("#point-generator");
poemFormGenerator.addEventListener("submit", generatePoem);
