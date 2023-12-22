function addElement() {
  let input = document.querySelector("input");
  let value = input.value;
  let div = document.createElement("div");
  div.setAttribute("class", "task");
  let task = document.createElement("p");
  let button = document.createElement("button");
  button.innerText = "Delete";
  div.onclick = () =>{
    task.style.textDecoration = "line-through"
  }
  button.onclick = function(){
    document.getElementById('tsklst').removeChild(div);
  }
  task.innerText = value;
  div.appendChild(task);
  div.append(button);
  document.getElementById("tsklst").append(div);
  input.value = "";
}


