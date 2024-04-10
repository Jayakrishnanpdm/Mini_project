let burger_icon = document.querySelector('.burger-icon');
let ul = document.querySelector("nav ul");
burger_icon.addEventListener("click",()=>{
    ul.classList.toggle("active");
})


function gotosecondpage() {
        window.location.href = "page2.html"; // Redirect to page2.html
}

function exitpage(){
    //window.close();//
    document.body.innerHTML = "<h1 class='goodbye'>Goodbye!</h1><p>This page has been terminated.</p>";
}    

    