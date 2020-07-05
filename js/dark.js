// Accessing DOM
let btn = document.querySelector('#btn');
let theme = document.querySelector('#theme');
// Event after clicking on label
btn.addEventListener("click",function(){
    //parameter checks which stylesheet is applied
    if(theme.getAttribute("href") == "css/light.css"){
        // if true then changes to dark mode on clicking
        theme.href = "css/dark.css";
    }
    else{
        // If false then changes to normal mode
        theme.href = "css/light.css"; 
    }
})
