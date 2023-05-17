let count = 0;

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
    
    count ++;

    localStorage.setItem( "task"+ "-" + count , JSON.stringify({
      "name": name,
      "date": date,
     "description": description,
     "ID": count
    }))

  const tasks = document.querySelector(".tasks")

  const lembrete = document.createElement("div")
  lembrete.classList.add("taskes")
  lembrete.onclick = () => {
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

  const ID = document.createElement("p")
  ID.textContent = count
  ID.classList.add("ID")
  ID.style.display = "none"
  lembrete.appendChild(ID)

  const buton = document.createElement("button")
  buton.classList.add("excluir")
  buton.textContent = "Delete"
  buton.addEventListener('click', function() {
    const div = buton.parentNode;
    const text = div.querySelector(".ID").textContent;

    console.log(text)
    div.remove()
    event.stopPropagation()

    localStorage.removeItem("task" + "-" +text)

  })
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