// document.getElementById('button1').addEventListener('click', getText);
// document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getData);

    

// function getText() {
//     fetch('test.txt')
//     .then(function(res){
//         return res.text();
//     }).then(function(data) {
//         document.getElementById('output').innerHTML = data;
//     }).catch(function(err){
//         console.log(err);
//     })
// }


// function getJson() {
//     fetch('posts.json')
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data) {
//         let output = '';
//         data.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         })
//         document.innerHTML = output;
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

function getData() {
    fetch('https://api.github.com/users')
    .then(response=>response.json())
    .then(data =>{
        console.log(data[0].avatar_url);
      
        let output;
        
        data.forEach(data=>{
            output += `
                <image src="${data.avatar_url}"/>
            `
        });

        document.getElementById('output').innerHTML = output;
    });
}