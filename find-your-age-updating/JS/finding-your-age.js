/** @format */

function ageMath() {
  const userAge = prompt("please input your age  ");
  agemonth = userAge * 12;
  ageday = userAge * 365;
  agehour = userAge * 8760;
  (totalage =
    " you are " +
    agemonth +
    "  months old " +
    ageday +
    " days " +
    " and " +
    agehour +
    " hours old"),
    (document.getElementById("age").innerHTML = totalage);
    (document.getElementById("checkage").innerHTML = "click here to input a new number");
}
