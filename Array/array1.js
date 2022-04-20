// Bài 1
// let size = parseInt(prompt('Nhập size của mảng: '));
// let array = new Array(size);
// for (let i = 0; i < array.length; i++) {
//     array[i] = Math.floor((Math.random() * (75 - 5 + 1) + 5));   
//     document.write(array[i] + '; ');
// } console.log(array);

// let maxArray = 0;
// for (i = 0; i < array.length; i++) {
//     if (array[i] > maxArray) {  
//         maxArray = array[i];
//     } 
// }document.write('<br>Số lớn nhất của mảng là: ' + maxArray + '<br>');

// let minArray = 75;
// for (i = 0; i< array.length; i++) {
//     if (array[i] < minArray) {
//         minArray = array[i];
//     }
// }document.write('Số nhỏ nhất của mảng là: ' + minArray + '<br>');

// let search = parseInt(prompt('Nhập một giá trị: '));
// let pos = -1;
// for (i = 0; i < array.length; i++) {
//     if (search == array[i]) {
//         pos = i;
//         document.write(pos + ",");
//     }
// }

// Bài 2
let num = (prompt('Nhập một dãy số: '));
document.write("Số " + num);
// parseInt(prompt('Nhập một dãy số: '));
let numString = String(num);
for (let index of numString) {
    console.log(index);
}
let text = " không phải số đối xứng";
for (i = 0; i < numString.length; i++) {
    if (numString[i] == numString[numString.length-(i+1)]) {
        text = " là số đối xứng";
    }
}  document.write(text);