function openChat() {
  document.getElementsByClassName("chat_block")[0].style.display = "block";
  document.getElementsByClassName("chat_block")[0].style.position = "absolute"
  document.getElementsByClassName("chat_block")[0].style.top = 0
  document.getElementsByClassName("chat_block")[0].style.left = 0 
  document.getElementsByClassName("chat_block")[0].style.width = 360
  document.getElementsByClassName("chat_block")[0].style.height = "100%"

  $('.chat').height($('.chat_block').height()-100)
  $('.scroll-panel').height($('.chat_block').height()-150)

  document.getElementsByClassName("chat_block")[0].style.overflow = "hidden"
}

function closeWindow(param) {
  if (param === "chat") {
    document.getElementsByClassName("chat_block")[0].style.display = "none";
  }
}