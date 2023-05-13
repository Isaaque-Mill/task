function addTask() {

  const name = document.querySelector(".text").value
  const date = document.querySelector(".date").value
  const description = document.querySelector(".description").value


  if (name == "") {

    alert("Preencha todos os campos")

  } else{
    setTimeout(function() {
      const name = document.querySelector(".text").value = ""
      const date = document.querySelector(".date").value = ""
      const description = document.querySelector(".description").value = ""
    }, 10);
  
  const tasks = document.querySelector(".tasks")

  const lembrete = document.createElement("div")
  lembrete.classList.add("taskes")
  tasks.appendChild(lembrete)

  const nome = document.createElement("p")
  nome.textContent = name
  nome.classList.add("p")
  lembrete.appendChild(nome)

  const buton = document.createElement("button")
  buton.classList.add("excluir")
  buton.textContent = "Excluir"
  buton.onclick = () => {
    lembrete.remove()
  }
  lembrete.appendChild(buton)

  input.value = "";

  }
};
