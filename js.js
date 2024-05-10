const btn_ajouter = document.querySelector(".modale-btn");
const icon_lu = document.querySelector("#lu");
const titre = document.querySelector(".titre");
const auteur = document.querySelector(".auteur");
const btn_popup = document.querySelector(".btn-pop");
const new_ul = document.querySelector(".new-ul");
let overlay = document.querySelector(".popup-overlay");
let btn_input = document.querySelector(".ajout-titre-auteur");
let input = document.querySelectorAll("input");
let Initialtelivres = [];
// locale storage
function addlocale(contact) {
  localStorage.setItem("contact", JSON.stringify(Initialtelivres));
}

function getlivre() {
  return JSON.parse(localStorage.getItem("contact"));
}
addlocale(Initialtelivres);
let livre = getlivre();
//  poppupp

btn_ajouter.addEventListener("click", () => {
  overlay.style = "display:block";
  return;
});

btn_popup.addEventListener("click", () => {
  overlay.style = "display:none";
  return;
});

function render() {
  Initialtelivres.forEach(() => {});

  const new_li = document.createElement("li");
  // let new_iD = new_li.setAttribute("id", Math.random());
  // new_iD.innerHTML = Math.random().toString(36);
  new_li.innerHTML = `   <strong>${titre.value}</strong> <em>${auteur.value}</em>   <i onclick="remove()"class="fa-solid fa-trash"></i><i onclick="livreLU()" id="lu" class="fa-solid fa-check"></i>
  `;
  new_ul.appendChild(new_li);
}
// popppup end

// ajout de livre

btn_input.addEventListener("click", () => {
  if (titre.value === "" || auteur.value === "") {
    alert("remplissez les deux champ");
    return;
  } else if (
    !/^[a-zA-Z]+$/.test(titre.value) ||
    !/^[a-zA-Z]+$/.test(auteur.value)
  ) {
    alert("entrez que des letrres");
    return;
  }

  function generateUniqueId() {
    return "" + Math.floor(Math.random() * 100000);
  }

  const id = `id = ${generateUniqueId()} `;
  const books = {
    id,
    title: titre.value,
    author: auteur.value,
    lu: icon_lu,
  };

  Initialtelivres.push(books);
  render();
  addlocale(livre);

  titre.value = "";
  auteur.value = "";

  overlay.style = "display:none";
});

function remove() {
  // document.querySelector(".id").parentElement.outerHTML = "";
  li = document.querySelector("li");
  new_ul.removeChild(li);
  return;
}
function livreLU() {
  let li = document.querySelector("li");
  new_ul.appendChild(li);
  li.style.textDecoration = "line-through";

  // li.innerHTML= `<strong>${livre.title}</strong> <em>${livre.author}</em> `
}
