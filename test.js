const test1 = "2015-12-25";
const test2 = 1451001600000;

const date1 = new Date(test1);
const date2 = new Date(date1);
console.log(date1.toUTCString());
console.log(Date.parse(date1));



