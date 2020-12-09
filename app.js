const name = 'wendell';
const age = 21;
const job = 'web developer';
const city = 'calamba';
let html;

function greeting()
{
    return 'hello '+ name;
}

// Without template strings (es5)
html = '<ul>' +
            '<li> Name:' + name + '</li>' + 
            '<li> Age:' + age + '</li>' +
            '<li> Job:' + job + '</li>' + 
            '<li> City:' + city + '</li>' + 
        '</ul>';
// With template Strings (es6)

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${3 + 3}</li>
        <li>${greeting()}</li>
        <li>${age > 18 ? 'legal age' : 'minor age' }</li>
    </ul>
    `

document.body.innerHTML= html;