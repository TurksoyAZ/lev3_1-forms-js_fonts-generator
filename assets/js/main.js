// Input
const inputRange=document.getElementById("range");
const inputSelect=document.getElementById("select");
const inputText= document.getElementById("text");

// Output 

const outputText=document.getElementById("output");


function getRange(){
    outputText.style.fontSize = inputRange.value + "px";
}

function getSelect(){
    outputText.style.fontFamily= inputSelect.value;
}

const getInputText=()=> {
    outputText.innerHTML = inputText.value;
}



























