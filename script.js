function addTask() {

  const name = document.querySelector(".text").value
  const date = document.querySelector(".date").value
  const description = document.querySelector(".description").value


  if (name == "", date == "", description == "") {
   const alert =document.querySelector(".alert").style.display = "block"

   setTimeout(function()  {
     const alert = document.querySelector(".alert").style.display = "none"
   }, 2000);
  } else{
    setTimeout(function() {
      const name = document.querySelector(".text").value = ""
      const date = document.querySelector(".date").value = ""
      const description = document.querySelector(".description").value = ""
    }, 1);
  
  const tasks = document.querySelector(".tasks")

  const lembrete = document.createElement("div")
  lembrete.classList.add("taskes")
  lembrete.onclick = 
  () => {
    const tela = document.querySelector(".tela")
    tela.style.display = "flex"
    event.stopPropagation();

    const tituloo = document.querySelector(".titulo")
    tituloo.textContent = name
    const data = document.querySelector(".data")
    data.textContent = date
    const descricao = document.querySelector(".sobre")
    descricao.textContent = description

  }
  tasks.appendChild(lembrete)

  const nome = document.createElement("p")
  nome.textContent = name
  nome.classList.add("p")
  lembrete.appendChild(nome)

  const date = document.createElement("p")
  date.textContent = date
  date.style.display = "flex"
  lembrete.appendChild(date)

  const description = document.createElement("p")
  description.textContent = description
  description.style.display = "flex"
  lembrete.appendChild(description)

  const buton = document.createElement("button")
  buton.classList.add("excluir")
  buton.textContent = "Delete"
  buton.onclick = () => {
    lembrete.remove()
    event.stopPropagation();
  }
  lembrete.appendChild(buton)
  }
};

function tela(){
  const tela = document.querySelector(".tela")
    tela.style.display = "none"
    event.stopPropagation();
}

function tela2(){
    event.stopPropagation();
}

