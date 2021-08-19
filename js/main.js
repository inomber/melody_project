$(document).ready(function () {
  var currentFloor = 2;  // переменная с текущим этажом 
  var counterUp = $('.counter-up') // кнопка увеличения этажа
  var counterDown = $('.counter-down') // кнопка уменьшения этажа
  var floorPath = $(".home-image path") // каждый отдельный этаж в svg
 
  // При наведении мышкой на этах
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor") // удаляем активных класс у этажа
    currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
    $('.counter').text(currentFloor); // записываем значение этажа в счетчик справа
  });

// отслеживаем клик по кнопке вверх
  counterUp.on("click", function () {
    if (currentFloor < 18) { // проверяем значение счетчика с этажем 
      currentFloor++; // прибавляем 1 этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, 
      useGroupping: false }); // форматируем переменную с этажом, чтобы было 01, а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик
      floorPath.removeClass("current-floor") // удаляем активеный класс у этажен
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
    }
  });
 // аналогичная кнопка, только вниз
  counterDown.on("click", function () {
    if(currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, 
      useGroupping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor")
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    } 
  })
});