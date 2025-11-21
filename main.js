
document.title = "fortune box";

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
    div.style.color = '#cdd6f4'
    div.style.borderRadius = '10px';
    div.style.outline = '1px solid #cba6f7'
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.margin = '10px';
    // div.style.overflowX = 'scroll';
    div.style.overflow = 'scroll'

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
    const boxes = child1.querySelectorAll('.box');

    if (boxes.length === 0) {
        console.log('you have nothing to return');

        const some = document.createElement('div');
        some.textContent = 'you have not created anything to spin';
        some.style.backgroundColor = '#f38ba8';
        some.style.color = '#11111b';
        some.style.padding = '10px';
        some.style.marginTop = '10px';
        some.style.borderRadius = '8px';

        child1.appendChild(some);

        setTimeout(() => {
            some.remove();
        }, 2000);

        return;
    }

    const randomIndex = Math.floor(Math.random() * boxes.length);
    const selectedBox = boxes[randomIndex];

    console.log("You get:", selectedBox.textContent);

    boxes.forEach(box => {
        box.style.width = '100px';
        box.style.height = '100px';
        box.style.backgroundColor = '#181825';
        box.style.color = '';
        box.style.fontSize = '';
    });

    selectedBox.style.width = '200px';
    selectedBox.style.height = '200px';
    selectedBox.style.backgroundColor = '#cba6f7';
    selectedBox.style.color = '#11111b';
    selectedBox.style.fontSize = '50px';
});