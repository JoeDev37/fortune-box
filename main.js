
console.log('Hello, World!')

const spin = document.getElementById('spin');
const addBtn = document.getElementById('addBtn');
const child1 = document.getElementById('child1');
const input = document.getElementById('input');


addBtn.addEventListener('click', () => {

    const div = document.createElement('div');
    div.className = 'selectedDiv'
    div.classList.add('box');

    const closeBtn = document.createElement('button')
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = 'X';

    closeBtn.addEventListener('click', () =>{
        div.remove();
    })

    div.style.background = '#181825';
    div.style.borderRadius = '10px';
    div.style.outline = '1px solid #cba6f7'
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.margin = '10px';
    div.style.overflowX = 'hidden'

    const addSomething = document.createElement('p');
    addSomething.classList.add('text');
    addSomething.textContent = input.value;

    addSomething.style.margin = '5px'


    if (input.value == '') {
        addSomething.textContent = 'WTF nigga type something!!';
        div.style.color = '#f38ba8'
    }

    div.appendChild(addSomething);
    div.appendChild(closeBtn);
    child1.appendChild(div);

    input.value = '';


});


// spin.addEventListener('click', () => {
//     // alert('Spinned')

//     const boxes = document.querySelectorAll('selectedDiv')

//     const randomBox = Math.floor(Math.random() * boxes.length);
//     const selecctedBox = boxes[randomBox];

//     // selecctedBox.classList.add('selected');

//     // selecctedBox.remove();

//     boxes.forEach(selecctedBox => selecctedBox.classList.remove('selected'));
//     selecctedBox.classList.add('selected')

//     console.log(selecctedBox.textContent)
// })

spin.addEventListener('click', () => {
    alert('out of service')
});


