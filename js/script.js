
const completedButton1 = document.querySelectorAll('#completedButton')[0]
const completedButton2 = document.querySelectorAll('#completedButton')[1]
console.log(completedButton2);

const completedButton3 = document.querySelectorAll('#completedButton')[2]
const completedButton4 = document.querySelectorAll('#completedButton')[3]
const completedButton5 = document.querySelectorAll('#completedButton')[4]
const completedButton6 = document.querySelectorAll('#completedButton')[5]


completedButton1.addEventListener("click", function(e){
    const taskAssigned = document.querySelector('#taskAssigned').innerText;
    const taskDone = document.querySelector('#completedTask').innerText;
    alert('board updated succesfully!');
    let currentTak1 = parseInt(taskAssigned) - 1;
    document.querySelector('#taskAssigned').innerText = currentTak1;
    currentTak1 = taskAssigned;
    let currentDone1 = parseInt(taskDone) + 1;
     document.querySelector('#completedTask').innerText = currentDone1;
     currentDone1 = taskDone;
    
})


completedButton2.addEventListener("click", function(e){
    const taskAssigned = document.querySelector('#taskAssigned').innerText;
    const taskDone = document.querySelector('#completedTask').innerText;
    alert('board updated succesfully!');
    let currentTak1 = parseInt(taskAssigned) - 1;
    document.querySelector('#taskAssigned').innerText = currentTak1;
    currentTak1 = taskAssigned;
    let currentDone1 = parseInt(taskDone) + 1;
     document.querySelector('#completedTask').innerText = currentDone1;
     currentDone1 = taskDone;
    
})


completedButton3.addEventListener("click", function(e){
    const taskAssigned = document.querySelector('#taskAssigned').innerText;
    const taskDone = document.querySelector('#completedTask').innerText;
    alert('board updated succesfully!');
    let currentTak1 = parseInt(taskAssigned) - 1;
    document.querySelector('#taskAssigned').innerText = currentTak1;
    currentTak1 = taskAssigned;
    let currentDone1 = parseInt(taskDone) + 1;
     document.querySelector('#completedTask').innerText = currentDone1;
     currentDone1 = taskDone;
    
})


completedButton4.addEventListener("click", function(e){
    const taskAssigned = document.querySelector('#taskAssigned').innerText;
    const taskDone = document.querySelector('#completedTask').innerText;
    alert('board updated succesfully!');
    let currentTak1 = parseInt(taskAssigned) - 1;
    document.querySelector('#taskAssigned').innerText = currentTak1;
    currentTak1 = taskAssigned;
    let currentDone1 = parseInt(taskDone) + 1;
     document.querySelector('#completedTask').innerText = currentDone1;
     currentDone1 = taskDone;
    
})


completedButton5.addEventListener("click", function(e){
    const taskAssigned = document.querySelector('#taskAssigned').innerText;
    const taskDone = document.querySelector('#completedTask').innerText;
    alert('board updated succesfully!');
    let currentTak1 = parseInt(taskAssigned) - 1;
    document.querySelector('#taskAssigned').innerText = currentTak1;
    currentTak1 = taskAssigned;
    let currentDone1 = parseInt(taskDone) + 1;
     document.querySelector('#completedTask').innerText = currentDone1;
     currentDone1 = taskDone;
    
})


completedButton6.addEventListener("click", function(e){
    const taskAssigned = document.querySelector('#taskAssigned').innerText;
    const taskDone = document.querySelector('#completedTask').innerText;
    alert('board updated succesfully!');
    let currentTak1 = parseInt(taskAssigned) - 1;
    document.querySelector('#taskAssigned').innerText = currentTak1;
    currentTak1 = taskAssigned;
    let currentDone1 = parseInt(taskDone) + 1;
     document.querySelector('#completedTask').innerText = currentDone1;
     currentDone1 = taskDone;
    
})
