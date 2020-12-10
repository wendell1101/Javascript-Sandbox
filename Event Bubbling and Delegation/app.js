// EVENT BUBBLING
const cardTitle = document.querySelector('.card-title');
const cardContent = document.querySelector('.card-content');
const card = document.querySelector('.card');
const col = document.querySelector('.col');

// cardTitle.addEventListener('click', function(){
//     console.log('card title');
// });

// cardContent.addEventListener('click', function(){
//     console.log('card content');
// });

// card.addEventListener('click', function(){
//     console.log('card');
// });

// col.addEventListener('click', function(){
//     console.log('col');
// });


// EVENT DELAGATION

const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    e.preventDefault();
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     e.target.parentElement.parentElement.remove();
    // }
    // if(document.querySelector('.collection').childElementCount <= 0){
    //     document.querySelector('.collection').innerHTML = `<h2> No Item Yet </h2>`;
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}