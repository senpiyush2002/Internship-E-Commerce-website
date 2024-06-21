var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");
var t6 = document.getElementById("t6");
var t7 = document.getElementById("t7");
var t8 = document.getElementById("t8");
var t9 = document.getElementById("t9");
var t10 = document.getElementById("t10");
var t11 = document.getElementById("t11");
var t12 = document.getElementById("t12");
var t13 = document.getElementById("t13");
var t14 = document.getElementById("t14");
var t15 = document.getElementById("t15");
var t16 = document.getElementById("t16");
var t17 = document.getElementById("t17");
var t18 = document.getElementById("t18");

function SetInventoryValue(){
    t1.value = parseInt(localStorage.getItem(0));
    t2.value = parseInt(localStorage.getItem(1));
    t3.value = parseInt(localStorage.getItem(2));
    t4.value = parseInt(localStorage.getItem(3));
    t5.value = parseInt(localStorage.getItem(4));
    t6.value = parseInt(localStorage.getItem(5));
    t7.value = parseInt(localStorage.getItem(6));
    t8.value = parseInt(localStorage.getItem(7));
    t9.value = parseInt(localStorage.getItem(8));
    t10.value = parseInt(localStorage.getItem(9));
    t11.value = parseInt(localStorage.getItem(10));
    t12.value = parseInt(localStorage.getItem(11));
    t13.value = parseInt(localStorage.getItem(12));
    t14.value = parseInt(localStorage.getItem(13));
    t15.value = parseInt(localStorage.getItem(14));
    t16.value = parseInt(localStorage.getItem(15));
    t17.value = parseInt(localStorage.getItem(16));
    t18.value = parseInt(localStorage.getItem(17));


}
function setPrice(){
var price = localStorage.getItem('total');
if (price) {
    var formattedPrice = 'Rs. ' + price;
    document.getElementById('price').textContent = formattedPrice;
}}
setPrice();