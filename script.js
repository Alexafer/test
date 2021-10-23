// let messageButton = document.getElementById('menu-complited-tasks');
// alert('я подключил скрипт-1');
let element = document.querySelector('.menu-complited-tasks'),
    tasksComplited = document.querySelector('.tasks-complited'),
    setTasksComplited = tasksComplited.textContent,
    numTaskComplited = Number(setTasksComplited),
    tasksOpen = document.querySelector('.tasks-open'),
    setTaskOpen = tasksOpen.textContent,
    numTaskOpen = Number(setTaskOpen),
    message = "Are you sure you want to change the number of tasks?";

element.onclick = function() {
    if (confirm(message) && numTaskOpen > 0) {
        numTaskComplited = numTaskComplited + 1;
        tasksComplited.textContent = numTaskComplited;
        numTaskOpen = numTaskOpen - 1;
        tasksOpen.textContent = numTaskOpen;
    } else if (numTaskOpen == 0) {
        alert("Not have open task!");
    }
}
let res = document.querySelector('.num');
let arrElem = document.querySelectorAll('.my-upload img');
let arrayElem = [];

for (let i = 0; i < arrElem.length; i++) {
    arrayElem.push(arrElem[i]);
    arrElem[i].addEventListener('click', function(e) {
        res.innerHTML = arrayElem.indexOf(e.target);
    });
}