/* 3. función que, al hacer click en el mismo, éste se transforme en una círculo de color verde*/

function changeclass (){
  document.getElementById("button").className = "circle";
} 
document.getElementById("button").onclick = function (){
  changeclass();
}