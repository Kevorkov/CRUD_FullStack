const deleteBtn = document.querySelector(".deleteBtn");

deleteBtn.addEventListener("click", function () {
  const id = deleteBtn.id;
  const name = document.getElementById("newName").value
  const surname = document.getElementById("newSurname").value
  if (name =='') {alert('Заполните имя')}
  else if (surname == '') {alert('Заполните фамилию')}
  else deleteUser(id);
});

async function deleteUser(id) {
  try {
    const responce = await fetch(`${api}/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    if (responce.ok) {
      alert("Пользователь удалён");
      location.reload();
    } else console.log("Error HTTP" + responce.status);
  } catch (error) {
    console.log("Ошибка при выполнении запроса" + error.message);
  }
}

