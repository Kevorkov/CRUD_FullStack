async function updateUser() {
  const name = document.getElementById("newName").value;
  const surname = document.getElementById("newSurname").value;

     try {
      const responce = await fetch(api,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({"id": updateBtn.id ,"name": name, "surname": surname })
      })
      if (responce.ok) {
       alert("Пользователь изменён")
       location.reload()
      } else console.log("Error HTTP" + responce.status);
    } catch (error) {
      console.log("Ошибка при выполнении запроса" + error.message);
    }
}

updateBtn.addEventListener("click", function () {
  const name = document.getElementById("newName").value
  const surname = document.getElementById("newSurname").value
  if (name =='') {alert('Заполните имя')}
  else if (surname == '') {alert('Заполните фамилию')}
  else updateUser();
});
