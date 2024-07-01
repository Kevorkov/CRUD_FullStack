const element = document.querySelector(".inner");
const chosenOne = document.querySelector(".chosenOne");
const updateBtn = document.querySelector(".updateBtn");


element.addEventListener("click", function (e) {
  if (e.target.classList.contains("card")) {
    const id = e.target.id;
    getUser(id);
  }
});

async function getUser(id) {
  try {
    const responce = await fetch(`${api}/${id}`);
    if (responce.ok) {
      const dataUser = await responce.json();
      createCard(dataUser);
    } else console.log("Error HTTP" + responce.status);
  } catch (error) {
    console.log("Ошибка при выполнении запроса" + error.message);
  }
}

function createCard(cardData) {
  chosenOne.setAttribute('id',`${cardData.id}`)
  deleteBtn.setAttribute('id',`${cardData.id}`)
  updateBtn.setAttribute('id',`${cardData.id}`) 
  //chosenOne.innerHTML=`${cardData.id}| ${cardData.name} ${cardData.surname}`;
  document.getElementById("newName").value = `${cardData.name}`
  document.getElementById("newSurname").value =`${cardData.surname}`
  };


