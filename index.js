const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("UL");
const btnDelete = document.querySelectorAll("BUTTON")


function inputLength() {
    return input.value.length;
}

function createListElement() {
    const li = document.createElement("LI");
    const button = document.createElement("BUTTON");
    const linebreak = document.createElement("BR");
    button.innerHTML = "delete";
    ul.appendChild(li);
    li.appendChild(document.createTextNode(input.value));
    input.value = "";
    li.parentNode.insertBefore(button, li.nextSibling);
    button.parentNode.insertBefore(linebreak, button.nextSibling);
}

function addListAfterKeyup(e) {
     if (e.which === 13 && inputLength() > 0) {
        createListElement();
    }
}

function listenUl(e) {
    if(e.target.tagName === "LI") {
    e.target.classList.toggle("done");
    } else if (e.target.tagName === "BUTTON") {
         ul.removeChild(e.target.previousElementSibling);
         ul.removeChild(e.target.nextElementSibling);
         ul.removeChild(e.target);
    }
    
}

input.addEventListener('keyup', addListAfterKeyup);

ul.addEventListener('click', listenUl);

ul.addEventListener('mousedown', function(e){ e.preventDefault(); }, false);
