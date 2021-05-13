const r = document.querySelector(".retorna");
function digitos(txt, c){
    if(c < txt.length){
        setTimeout(()=>{
            retorna.textContent += text.charAt(c);
            c++;
            digitos(txt, c); 
        }, 100)
    }

}

digitos("< Welcome to my Portfolio! />", 0);