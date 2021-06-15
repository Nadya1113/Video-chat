// Адаптив окна трансляции
$(".translation").height($(window).height()-50)

// Заготовка на будущее, адаптив
$(window).resize(function(){
  $(".translation").height($(window).height()-50)
})