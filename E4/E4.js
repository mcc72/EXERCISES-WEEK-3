//función que al hacer click en él, escriba el contenido (value) del input como un título en el documento.

const getValueInput = () => {
    let inputValue = document.getElementById("textInput").value;
    document.getElementById("valueInput").innerHTML = inputValue; 
    document.getElementById("textInput").value = "";
}
