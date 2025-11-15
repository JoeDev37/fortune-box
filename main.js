console.log('Hello, World!')

const spin = document.getElementById('spin');
const addBtn = document.getElementById('addBtn');
const child1 = document.getElementById('child1');
const input = document.getElementById('input');


addBtn.addEventListener('click', () => {

    const div = document.createElement('div');
    div.className = 'box';
    div.classList.add('selectedDiv');

    const closeBtn = document.createElement('button')
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = 'X';

    closeBtn.addEventListener('click', () => {
        div.remove();
    })

    div.style.background = '#181825';
    div.style.borderRadius = '10px';
    div.style.outline = '1px solid #cba6f7'
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.margin = '10px';
    div.style.overflowX = 'scroll';

    const addSomething = document.createElement('p');
    addSomething.classList.add('text');
    addSomething.textContent = input.value;

    addSomething.style.margin = '0';
    addSomething.style.textAlign = 'center';

    if (input.value == '') {
        addSomething.textContent = 'WTF nigga type something!!';
        div.style.color = '#f38ba8';
    }

    div.appendChild(addSomething);
    div.appendChild(closeBtn);
    child1.appendChild(div);

    input.value = '';
});



spin.addEventListener('click', () => {
    const boxes = document.querySelectorAll('p');
    if (boxes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * boxes.length);
    const selectedBox = boxes[randomIndex];

    console.log("You get:", selectedBox.textContent);

    document.querySelectorAll('.box').forEach(box => {
        box.style.width = '100px';
        box.style.height = '100px';
        box.style.backgroundColor = '#181825';
        box.style.color = '';
        box.style.fontSize = '';
    });

    const targetDiv = selectedBox.parentNode;

    targetDiv.style.width = '200px';
    targetDiv.style.height = '200px';
    targetDiv.style.backgroundColor = '#cba6f7';
    targetDiv.style.color = '#11111b';
    targetDiv.style.fontSize = '50px';
});
