const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// DoubleCLick
// clearBtn.addEventListener('dblclick', runEvent);
// Mouse down
// clearBtn.addEventListener('mousedown', runEvent);
// Mouse up
// clearBtn.addEventListener('mouseup', runEvent);
// Mouse enter
// card.addEventListener('mouseenter', runEvent);
// // Mouse leave
// card.addEventListener('mouseleave', runEvent);
// // Mouse over
// card.addEventListener('mouseover', runEvent);
// // Mouse out
// card.addEventListener('mouseout', runEvent);

//Mouse move
card.addEventListener('mousemove', runEvent);

// Event Handler

function runEvent(e){
    e.preventDefault();
    heading.innerHTML = `<h5> MouseX: ${e.offsetX} MouseY: ${e.offsetY}</h5>`;
    document.body.style.background = `rgb(${e.offsetX},${e.offsetY}, 40)`;
    console.log(`Event type: ${e.type}`);
}