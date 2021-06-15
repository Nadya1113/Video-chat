$('.chat').height($('.chat_block').height()-100)
$('.scroll-panel').height($('.chat_block').height()-130)

// Заготовка на будущее, адаптив
$(window).resize(function(){
  $('.scroll-panel').height($('.chat_block').height()-130)
  $('.chat').height($('.chat_block').height()-100)
});

// Если след комментарий будет первый - нужно отчистить чат
let firstComment = true

function sendMessage() {
  if (firstComment) {
    // Чистим чат
    document.getElementById("scroll-panel").innerHTML = ""
    firstComment = !firstComment
  }
  
  let message = document.getElementById("message").value

  // Если сообщение больше 0 - показываем в чате
  if (message.length > 0) {
    document.getElementById("scroll-panel").innerHTML += 
    `
    <div class="user_comment">
      <div class="avatar">
        <p>${localStorage.getItem("UserName")[0].toUpperCase()}</p>
      </div>
      <div class="content">
        <h2 class="name_user">${localStorage.getItem("UserName")}</h2>
        <p class="comment_user">${message}</p>
      </div>
    </div>
    `

    // Скролл перемещаем в самый низ
    let block = document.getElementById("scroll-panel");
    block.scrollTop = block.scrollHeight;

    // Чистим окно ввода кода пользователем
    document.getElementById("message").value = ""
  }
}