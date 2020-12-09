let val;

const today = new Date();
let birthDate = new Date('01-11-1999 11:21:00');
birthDate = new Date('January 21, 1999');
birthDate = new Date('01/11/1999');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthDate.setMonth(1);
birthDate.setDate(12);
birthDate.setFullYear(2019);
birthDate.setHours(4);
birthDate.setMinutes(30);
birthDate.setSeconds(20);


console.log(birthDate);