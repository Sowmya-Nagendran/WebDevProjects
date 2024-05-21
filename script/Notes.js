const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes(){
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notesContainer.innerHTML = storedNotes;
    }
    attachEventListenersToNotes();
}

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function attachEventListenersToNotes() {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
        note.addEventListener("keyup", updateStorage);
    });
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    inputBox.addEventListener("keyup", updateStorage);
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
});

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

showNotes();