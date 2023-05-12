function addTask() {

  const name = document.querySelector(".text").value
  const date = document.querySelector(".date").value
  const description = document.querySelector(".description").value

  const tasks = document.querySelector(".tasks")

  const lembrete = document.createElement("div")
  lembrete.classList.add("taskes")
  tasks.appendChild(lembrete)

  const nome = document.createElement("p")
  nome.textContent = name
  nome.classList.add("p")
  lembrete.appendChild(nome)
}