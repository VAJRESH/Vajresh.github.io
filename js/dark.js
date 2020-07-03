let btn = document.querySelector('#btn');
let theme = document.querySelector('#theme');
btn.addEventListener("click",function(){
    if(theme.getAttribute("href") == "css/light.css"){
        theme.href = "css/dark.css";
    }
    else{ theme.href = "css/light.css"; }
})