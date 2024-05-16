const btn_ajouter = document.querySelector(".modale-btn");
const icon_lu = document.querySelector("#lu");
const titre = document.querySelector(".titre");
const auteur = document.querySelector(".auteur");
const btn_popup = document.querySelector(".btn-pop");
const new_ul = document.querySelector(".new-ul");
let overlay = document.querySelector(".popup-overlay");
let btn_input = document.querySelector(".ajout-titre-auteur");
let input = document.querySelectorAll("input");
let divContainer = document.querySelector(".ajouter-new-listes");

function getContacts() {
  return JSON.parse(localStorage.getItem("contacts"));
}

let Iniitlivres = getContacts() || [];
// console.log(livres);
function setContacts(contacts) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

setContacts(Iniitlivres);
let contacts = getContacts();
// JSON.parse(localStorage.getItem("contact")) ||
// locale storage
// function addlocale(contact) {
//   localStorage.setItem("contact", JSON.stringify(Initialtelivres));
// }

// function getlivre() {
//   return JSON.parse(localStorage.getItem("contact"));
// }
// addlocale(Initialtelivres);
// let livre = getlivre();
//  poppupp

btn_ajouter.addEventListener("click", () => {
  overlay.style = "display:block";
  return;
});

btn_popup.addEventListener("click", () => {
  overlay.style = "display:none";
  return;
});

// function render() {
console.log(Iniitlivres);
// Initialtelivres.forEach((book) => {
//   console.log(book);
// });
function render(titre, auteur) {
  const new_div = document.createElement("div");
  new_div.className = "div_1";
  const new_div1 = document.createElement("div");
  new_div1.className = "div_2";
  const h2 = document.createElement("h3");
  h2.textContent = titre;
  const h3 = document.createElement("h4");
  h3.textContent = auteur;
  // const span = document.createElement("p");
  // span.innerHTML = `<i onclick="remove()"class="fa-solid fa-trash"></i><i onclick="livreLU()" id="lu" class="fa-solid fa-check"></i>`;
  // `
  const ButtonLu = document.createElement("button");
  ButtonLu.classList.add("ButtonLu");
  ButtonLu.textContent = "lu";
  const button1 = document.createElement("button");
  button1.textContent = "supprimer";
  button1.classList.add("button1");
  divContainer.appendChild(new_div);
  divContainer.appendChild(new_div1);
  new_div.appendChild(h2);
  new_div.appendChild(h3);
  // new_div1.appendChild(span);
  new_div1.appendChild(ButtonLu);
  new_div1.appendChild(button1);
  button1.addEventListener("click", () => {
    const result = confirm("etes vous sur de vouloir supprimer ce livre");
    if (result == false) {
      event.preventDefault();
    } else {
      divContainer.removeChild(new_div);
      divContainer.removeChild(new_div1);
      localStorage.removeItem("contacts", Iniitlivres.id);
    }
  });

  ButtonLu.addEventListener("click", () => {
    new_div.style.textDecoration = "line-through";
    new_div1.removeChild(ButtonLu);
  });
}
// new_div.innerHTML =
// //  `   <strong>${titre.value}</strong> <em>${auteur.value}</em>   <i onclick="remove()"class="fa-solid fa-trash"></i><i onclick="livreLU()" id="lu" class="fa-solid fa-check"></i>
// // `
// ;
// new_ul.appendChild();
// }
// popppup end

// ajout de livre

btn_input.addEventListener("click", () => {
  if (titre.value === "" || auteur.value === "") {
    alert("remplissez les deux champ");
    return;
  }
  // } else if (
  //   // !/^[a-zA-Z]+$/.test(titre.value) ||
  //   // !/^[a-zA-Z]+$/.test(auteur.value)
  // ) {
  //   alert("entrez que des letrres");
  //   return;
  // }

  function generateUniqueId() {
    return "" + Math.floor(Math.random() * 100000);
  }

  const id = `id = ${generateUniqueId()} `;
  const books = {
    id,
    title: titre.value,
    author: auteur.value,
  };

  Iniitlivres.push(books);
  setContacts(Iniitlivres);
  render(books.title, books.author);

  titre.value = "";
  auteur.value = "";

  overlay.style = "display:none";
});

document.addEventListener("DOMContentLoaded", () => {
  Iniitlivres.forEach((livre) => {
    // for (const livre of Iniitlivres) {
    render(livre.title, livre.author);
  }); // }
});
// document.addEventListener("DOMContentLoaded", () => {
//   livres.forEach((livre) => {
//     const new_div = document.createElement("div");
//     new_div.className = "div_1";
//     const new_div1 = document.createElement("div");
//     new_div1.className = "div_2";
//     const h2 = document.createElement("h3");
//     h2.textContent = livre.title;
//     const h3 = document.createElement("h4");
//     h3.textContent = livre.author;
//     // const span = document.createElement("p");
//     // span.innerHTML = `<i onclick="remove()"class="fa-solid fa-trash"></i><i onclick="livreLU()" id="lu" class="fa-solid fa-check"></i>`;
//     // `
//     const ButtonLu = document.createElement("button");
//     ButtonLu.classList.add("ButtonLu");
//     ButtonLu.textContent = "lu";
//     const button1 = document.createElement("button");
//     button1.textContent = "supprimer";
//     button1.classList.add("button1");
//     divContainer.appendChild(new_div);
//     divContainer.appendChild(new_div1);
//     new_div.appendChild(h2);
//     new_div.appendChild(h3);
//     // new_div1.appendChild(span);
//     new_div1.appendChild(ButtonLu);
//     new_div1.appendChild(button1);
//     button1.addEventListener("click", () => {
//       const result = confirm("etes vous sur de vouloir supprimer ce livre");
//       if (result == false) {
//         event.preventDefault();
//       } else {
//         divContainer.removeChild(new_div);
//         divContainer.removeChild(new_div1);
//       }
//     });

//     ButtonLu.addEventListener("click", () => {
//       new_div.style.textDecoration = "line-through";
//       new_div1.removeChild(ButtonLu);
//     });
//   });
// });
