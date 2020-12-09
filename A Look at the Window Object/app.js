// WINDOW METHODS / OBJECTS / PROPERTIES


// ALERT
// window.alert('hello world');

//PROMPT
// const input = prompt();
// alert(input);

// CONFIRM
// if(confirm('Are you sure?')){
//     console.log('yes');
// }else{
//     console.log('no');
// }

let val;
// OUTER HEIGHT AND WIDTH
val = window.outerHeight;
val = window.outerWidth;
// INNER HEIGHT AND WIDTH
val = window.innerHeight;
val = window.innerWidth;

// SCROLL POINTS

val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;
// val = window.location.reload;
// val = window.location.href='http://google.com';

// HISTORY OBJECT

// window.history.go(-1)
val = window.history.length;

// NAVIGATOR OBJECT
val = window.navigator;

console.log(val);
