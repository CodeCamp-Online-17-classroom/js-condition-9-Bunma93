// write code here
let num1 = prompt("ค่าที่ 1");
let num2 = prompt("ค่าที่ 2");
let num3 = prompt("ค่าที่ 3");
let values = [num1, num2, num3];
let sortedValues = values.toSorted((a,b) => b - a);
alert(sortedValues);