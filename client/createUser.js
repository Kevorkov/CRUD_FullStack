const createUserBtn = document.querySelector(".createUserBtn");

async function createUser() {
  const name = document.getElementById("newName").value;
  const surname = document.getElementById("newSurname").value;
  try {
    const responce = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ "name": name, "surname": surname }),
    });
    if (responce.ok) {
      alert("Пользователь успешно создан");
      location.reload();
    } else console.log("Error HTTP" + responce.status);
  } catch (error) {
    console.log("Ошибка при выполнении запроса" + error.message);
  }
}

createUserBtn.addEventListener("click", function () {
  const name = document.getElementById("newName").value
  const surname = document.getElementById("newSurname").value
  if (name =='') {alert('Заполните имя')}
  else if (surname == '') {alert('Заполните фамилию')}
  else createUser();
  
});
