// let messageButton = document.getElementById('menu-complited-tasks');
alert('я подключил скрипт?');
// console.log(document.getElementById('menu-complited-tasks'));
// let messageButton = document.querySelector('.tasks-complited');
let message = "Are you sure you want to change the number of tasks?";
let taskOpen = document.querySelector('.tasks-open');
let taskComplited = document.querySelector('.tasks-complited');
let imgCollection = document.querySelectorAll('.my-upload img');
// confirm(confirmm);
// messageButton.onclick = function() {
//         if (confirm(message) == true) {
//             taskOpen.textContent = taskOpen--;
//             taskComplited.textContet = taskComplited++;
//         } else if (confirm(message) == true && taskOpen == 0) {
//             alert("Not have open task");
//         }
//     }
// for (let imgColl of imgCollection) {
//     imgColl.onclick() = function() {

//     }
// }
let num = document.querySelector('.num');
let arrElem = document.querySelectorAll('.my-upload img');
let arrayElem = [];

for (var i = 0; i < arrElem.length; i++) {
    arrayElem.push(arrElem[i]);
    arrElem[i].addEventListener('click', function(e) {
        num.innerHTML = arrayElem.indexOf(e.target);
    });
}