//función que escriba en el documento HTML cada item de una lista de la compra
const pcComponents = ["motherboard", "cpu", "sound card", "HDD"];
let listComponents = pcComponents.length;
let list ="<ul>";
for (let i=0; i< listComponents; i++) {
    list += "<li>" + pcComponents[i] + "</li>";
}
list +="</ul>";
document.getElementById("printList").innerHTML = list;