let cypher = document.getElementById("cypher");
const btn = document.getElementById("queryBtn");
btn.addEventListener('click',submitQuery);
function submitQuery(){
  let btnInput = cypher.value
  console.log(btnInput); // return object
}

//document.querySelector('button').addEventListener('click', function(){
 // alert("click");
//})
