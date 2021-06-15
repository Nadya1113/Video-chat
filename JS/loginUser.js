// Простая функция получение уникального идентификатора
let Robot = function(){
  this.name = Date.now();
}

// Если пользователю идентификатор не присваивался - присваиваем и сохраняем
if (!localStorage.getItem("UserName")) {
  Robot()
  localStorage.setItem("UserName", "id" + this.name)
}

// Выводим в окно пользователей нас
document.getElementById("users_name").innerHTML = 
  `<div><p>${localStorage.getItem("UserName")}</p><img src="PNG/delete_user.png" alt="delete user"></div>`