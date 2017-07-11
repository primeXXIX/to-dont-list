// let list = []

// addTask() function
// removeTask() ''''
// BuildLIst ''''

let addNewTask = function() {
  let li = document.createElement("li")
  let newtask = document.getElementById("addTask").value
  let textNode = document.createTextNode(newtask)
  li.appendChild(textNode);
  document.getElementById("list").appendChild(li);
}
  // li.appendChild(textNode)
  // if (newtask === '') {
  // alert("You must write something!");
// } else {
//   document.getElementById("list").appendChild(li)
// }
// }
// alert("there's snakes on this mf plane!!!!")
