
const completedButton1 = document.querySelectorAll('#completedButton')[0]
const completedButton2 = document.querySelectorAll('#completedButton')[1]


const completedButton3 = document.querySelectorAll('#completedButton')[2]
const completedButton4 = document.querySelectorAll('#completedButton')[3]
const completedButton5 = document.querySelectorAll('#completedButton')[4]
const completedButton6 = document.querySelectorAll('#completedButton')[5]

let count = 0;


let myDate = new Date();

document.getElementById('Date').innerText = myDate.toDateString();

// // <script>
//         // creating a function that add children into ul parent
//                     // Not Optimized bcz full tree traversal used====
//                     function addLanguage(langName){
//                         // step-1: create element:---
//                         const li = document.createElement('li');
//                                 li.innerHTML = `${langName}`;
//                         //step-2: select element & attach with:---
//                         const targetElement = document.querySelector('.language');
//                         //step-3: appand element:----
//                         targetElement.appendChild(li);
//                 }
        



//                 addLanguage('python');
//                 addLanguage('C++');
        
//                 function addOptimezLanguage(langName){
//                         //More optimized Aproach as compare to above scenarioes:::
//                         const li = document.createElement('li');
//                         li.appendChild(document.createTextNode(langName));
//                         document.querySelector('.language').appendChild(li)
//                 }
//                 addOptimezLanguage('Golang');
        
        
//                 // EDIT : (editting element):
//                     //1st child
//                 const secondLang = document.querySelector('li:nth-child(2)');
//                 // secondLang.innerHTML = 'Rust';
//                  const newli = document.createElement('li');
//                  newli.textContent = 'Rust';
//                  secondLang.replaceWith(newli);
        
//                  // EDIT : (editting element):
//                     // 2nd child
//                 const firstlang = document.querySelector('li:first-child');
//                 firstlang.outerHTML = '<li>TypeScript</li>'
        
//                 // EDIT--(Remove)---: (removing element):
                
//                 // const lastLang = document.querySelector('li:last-child');
//                 // lastLang.remove();
                    


const randomColor = function(){
    const hexValue = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hexValue[Math.floor(Math.random() * 16)];
    }return color;
};


document.querySelector('#colorChange').addEventListener('click',  function changeBackgroundColor(){
    document.body.style.backgroundColor = randomColor();
})




const history = document.getElementById('clear');
history.addEventListener('click', function(){
    // Select the parent element
var parentElement = document.getElementById('task-info');

// Clear the inner HTML of the parent element
parentElement.innerHTML = '';
})





function addInfo(btninfo){
    const p = document.createElement('p');
    p.innerText = ` You have completed the task ${btninfo} at ${myDate.toLocaleTimeString()}`;
    const taskContainer = document.getElementById('task-info');
    taskContainer.appendChild(p);
}

function invissible(invissible){
    invissible.classList.add('hidden');
}





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
     btn = document.getElementById('btn1').innerText;
    addInfo(btn);
    invissible(completedButton1);
    currentcount = count + 1;
    count = currentcount;
    console.log(count);
    if(count == 6){
        alert('yiu completed all task')
    }
    

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
     btn = document.getElementById('btn2').innerText;
    addInfo(btn);
    invissible(completedButton2);
    currentcount = count + 1;
    count = currentcount;
    console.log(count);
    if(count == 6){
        alert('yiu completed all task')
    }
    
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
     btn = document.getElementById('btn3').innerText;
    addInfo(btn);
    invissible(completedButton3);
    currentcount = count + 1;
    count = currentcount;
    console.log(count);
    if(count == 6){
        alert('yiu completed all task')
    }
    
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
     btn = document.getElementById('btn4').innerText;
    addInfo(btn);
    invissible(completedButton4);
    currentcount = count + 1;
    count = currentcount;
    console.log(count);
    if(count == 6){
        alert('yiu completed all task')
    }
    
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
     btn = document.getElementById('btn5').innerText;
    addInfo(btn);
    invissible(completedButton5);
    currentcount = count + 1;
    count = currentcount;
    console.log(count);
    if(count == 6){
        alert('yiu completed all task')
    }
    
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
     btn = document.getElementById('btn6').innerText;
    addInfo(btn);
    invissible(completedButton6);
    currentcount = count + 1;
    count = currentcount;
    console.log(count);
    if(count == 6){
        alert('congrats!!! You have completed all tasks')
    }
    
});


