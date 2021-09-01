var enter = document.getElementById("enter");
var input = document.getElementById('input');
var ul = document.querySelector('ul');
var item = document.getElementsByTagName('li');


function createElement(){
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(input.value));
      ul.appendChild(li);
      input.value="";

      var btn = document.createElement("button");
      btn.appendChild(document.createTextNode('X'));
      li.appendChild(btn);
      
      function complete(){
          li.classList.add("complete");
      }
      
      function btnDelete(){
          li.style.display="none";
      }
      btn.addEventListener("click",btnDelete);
      li.addEventListener("click",complete);
}
function affbutton(){
    if(input.value.length>0){
        createElement();
    }
}
enter.onclick = affbutton;
function affenter(event){
    if(input.value.length>0 && event.which ===13){
        createElement();
    }
}
input.addEventListener("keypress",affenter);

