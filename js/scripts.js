// Increase and Decrease buttons
$(".increase").click(function () {
  let number = +$(this).parent().siblings(".number").text().toEnglishDigits();
  number++;
  $(this).parent().siblings(".number").text(number.toString().toPersianDigits());

  // Show again the decrease number
  if (number > 0) $(this).siblings(".decrease").show();

  // Calculate new sum
  let price = $(this).parent().parent().parent().children().children()[0].innerText;
  price = price.replace("/", "").toEnglishDigits();
  let sum = price * number;
  sum = sum.toString().toPersianDigits();
  sum = sum.split("");
  sum.reverse().splice(3, 0, "/").reverse();
  sum.reverse();
  sum = sum.join("");

  // Inset new sum
  let sumE = $(this).parent().parent().parent().siblings(".sum-div").children().children()[0];
  $(sumE).text(sum);
});

$(".decrease").click(function () {
  let number = +$(this).parent().siblings(".number").text().toEnglishDigits();
  number--;
  $(this).parent().siblings(".number").text(number.toString().toPersianDigits());

  // Hide it if numbers get zero
  if (number == 0) $(this).hide();

  // Calculate new sum
  let price = $(this).parent().parent().parent().children().children()[0].innerText;
  price = price.replace("/", "").toEnglishDigits();
  let sum = price * number;
  sum = sum.toString().toPersianDigits();
  sum = sum.split("");
  sum.reverse().splice(3, 0, "/").reverse();
  sum.reverse();
  sum = sum.join("");

  // Inset new sum
  let sumE = $(this).parent().parent().parent().siblings(".sum-div").children().children()[0];
  $(sumE).text(sum);
});


















//////////////////////////////////////////////////////////////////
/////////////////////////// Used methods//////////////////////////
//////////////////////////////////////////////////////////////////
// Conver Persian numbers to English
String.prototype.toEnglishDigits = function () {
  return this.replace(/[۰-۹]/g, function (chr) {
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return persian.indexOf(chr);
  });
};

// Conver English numbers to Persian
String.prototype.toPersianDigits = function () {
  return this.replace(/[0-9]/g, function (chr) {
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    var English = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return persian[English.indexOf(chr)];
  });
};
