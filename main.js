document.title = "fortune box";

const spin = document.getElementById('spin');
const addBtn = document.getElementById('addBtn');
const child1 = document.getElementById('child1');
const input = document.getElementById('input');

const overlay = document.getElementById('overlay');
const popupText = document.getElementById('popupText');
const closePopup = document.getElementById('closePopup');

function showPopup(message) {
    popupText.textContent = message;
    overlay.style.display = 'flex';
}

closePopup.addEventListener('click', () => {
    overlay.style.display = 'none';
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});

addBtn.addEventListener('click', () => {

    const div = document.createElement('div');
    div.className = 'box';

    const closeBtn = document.createElement('button')
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = 'X';

    closeBtn.addEventListener('click', () => {
        div.remove();
    });

    const addSomething = document.createElement('p');
    addSomething.classList.add('text');
    addSomething.textContent = input.value;

    addSomething.style.margin = '0';
    addSomething.style.textAlign = 'center';

    if (input.value.trim() === '') {
        const warn = document.createElement('div');
        warn.textContent = 'Empty input. Try again.';
        warn.style.backgroundColor = '#f38ba8';
        warn.style.color = '#11111b';
        warn.style.padding = '10px';
        warn.style.marginTop = '10px';
        warn.style.borderRadius = '8px';

        child1.appendChild(warn);

        setTimeout(() => {
            warn.remove();
        }, 2000);

        return;
    }


    div.appendChild(addSomething);
    div.appendChild(closeBtn);
    child1.appendChild(div);

    input.value = '';
});

spin.addEventListener('click', () => {
    const boxes = child1.querySelectorAll('.box');

    if (boxes.length === 0) {
        const some = document.createElement('div');
        some.textContent = 'No items to spin.';
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

    boxes.forEach(box => {
        box.style.width = '100px';
        box.style.height = '100px';
        box.style.backgroundColor = '#181825';
        box.style.color = '';
        box.style.fontSize = '';
    });

    selectedBox.style.backgroundColor = '#cba6f7';
    selectedBox.style.color = '#11111b';

    const onlyText = selectedBox.querySelector('.text').textContent;

    // 🎉 Trigger confetti right when a box is chosen
    confetti({
        particleCount: 300,
        spread: 120,
        angle: 60,
        origin: { x: 0.5, y: 0.5 }
    });

    showPopup(onlyText);
});
