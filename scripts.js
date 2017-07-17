(function() {
let domList = document.getElementById('list'),
    list = [],
    taskInput = document.getElementById("inputField")

const task = {
  // add: (val) => {
  //   list.push({
  //     value: val, selected: false
  //   })
  // }

  // no curly braces, means implicit return
  add: () => {

      if (taskInput.value === '') {
        alert('fll in field')
      } else {
        list.push({
          value: taskInput.value, selected: false
        })
    }


    task.render()
    taskInput.value = ''
  },

  update: () => {

  },

  delete: () => {
    list = list.filter((item) => {
      return item.selected === false
    })
    task.render()
  },

  render: () => {
    domList.innerHTML = '' //clear the list
    list.forEach(item =>
      domList.innerHTML += item.selected
        ? `<li class="selected">${item.value}</li>`
        :  `<li>${item.value}</li>`)
  },

  select: (event) => {
    event.target.classList.toggle('selected')
    list.forEach(item => {
      if (event.target.innerHTML === item.value) {
        item.selected = !item.selected
      }
    })
  },
}

document.getElementById("addButton").addEventListener('click', task.add)
document.getElementById("removeButton").addEventListener('click', task.delete)
domList.addEventListener('click', task.select)
task.render()
})()
