function gettext() {
    var inputId = document.getElementById("inp").value;
  
    var liElement = document.getElementById(inputId);
    var text=document.getElementById("text")
  
    if (liElement) {
       text.innerHTML=liElement.innerText;
    } else {
      text.innerHTML="Aucun élément trouvé avec cet ID.";
    }
  }
  
  
  