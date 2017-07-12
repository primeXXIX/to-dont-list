// let list = []

// addTask() function
// removeTask() ''''
// BuildLIst ''''

let addNewTask = function() {
  let li = document.createElement("li")
  let newTask = document.getElementById("addTask").value
  let textNode = document.createTextNode(newTask)
  li.appendChild(textNode);
  document.getElementById("list").appendChild(li)
}

let removeAllTask = function() {
  let listItem = document.getElementById("list")
if(listItem.innerHTML.length == 0){
  alert("No list Items to remove")
}else{
 confirm("Are you sure you want to Remove All Tasks")
 listItem.innerHTML = ""
}
}

// let removeTask = function() {
//   let listItem = document.getElementById("list")
//   listItem.click('li', function(removeItem){
//     removeItem.target.remove()
//   })
// }
