

var inputText=document.querySelector("#translate-input");
var outputText=document.querySelector("#translate-output");

var url = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationUrl(input){
    return url+"?"+"text="+ input;

}
function errorHandler(error){
    console.log("error occcured");
    alert("Something wrong with the server try after some time")
}


function clickHandler(event){
console.log(event);
    var input= inputText.value;
    fetch(getTranslationUrl(input))
    .then(response=>response.json())
    .then(json =>{
        outputText.innerText= json.contents.translated;
    })
    .catch(errorHandler)



}



var translateButton= document.querySelector("#translate-button");

translateButton.addEventListener("click",clickHandler);
