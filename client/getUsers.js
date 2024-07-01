const api = "http://localhost:8080/api/user";
const inner = document.querySelector(".inner");
const btn = document.querySelector(".btn");

async function showUserList() {
  try {
    const responce = await fetch(api)
    if (responce.ok) {
      const data = await responce.json();
      createCards(data);
      console.log("done")
    } else console.log("Error HTTP " + responce.status);
  } catch (error) {
    console.log("Ошибка при выполнении запроса" + error.message);
  }
}

function createCards(cardsData) {
  cardsData.forEach((cardsData) => {
    const card = 
    `      
    <li class = "card" id=${cardsData.id} class = "incard"> ${cardsData.name} ${cardsData.surname} </li>
    ` 
        
    inner.insertAdjacentHTML("beforeend", card);
  });
}

window.addEventListener('load', () => {
  showUserList();
});

