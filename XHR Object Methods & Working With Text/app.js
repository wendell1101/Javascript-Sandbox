document.getElementById('button').addEventListener('click', loadData);


function loadData(){
    // CREATE AN XHR OBJECT
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('get', 'data.txt', true);
    // console.log('READYSTATE', xhr.readyState);

    xhr.onload = function() {
        if(this.status === 200){
            
            document.querySelector('#output').innerHTML = `
            <h1>${this.responseText}</h1>
            `;
        }
    }

    // xhr.onreadystatechange = function () {
    //     if(this.status ===200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }
    xhr.send();


    //readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready


    // Http statuses
    // 200 : "ok"
    // 403 : "Forbidden"
    // 404 : "Page not found"
}