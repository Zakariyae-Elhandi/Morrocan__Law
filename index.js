function gettext() {
    var inputId = document.getElementById("inp").value;

    var liElement = document.getElementById("a"+inputId);

    if (liElement) {
        document.write("Phrase extraite : " + liElement.innerText);
    } else {
        document.write("Aucun élément trouvé avec cet ID.");
    }
}
