//Bài 1  
let i = 10;
let f = 20.5;
let b = true;
let s = "Hà Nội";
document.write('i = ' + i)
document.write('<br/>')
document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + b)
document.write('<br/>')
document.write('s = ' + s)
document.write('<br/>')
// Bài 2
let width = 20;
let height = 10;
let area = width * height;
document.write('Area =' + area);
//Bài 3
let A = prompt('Nhập số đầu tiên nào');
let B = prompt('Nhập tiếp số thứ hai đi');
let C = B % A;
if (C == 0) {
    text = "Số đầu tiên là bội của số thứ hai nhé";
}
else {
    text = "Số đầu tiên không phải là bội của số thứ hai rồi";
}
alert(text);