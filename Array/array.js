// let size = parseInt(prompt('Nhập size của mảng: '));
// let array = new Array(size);
// for (let i = 0; i < array.length; i++) {
//     array[i] = parseInt(prompt('Nhập các giá trị của phần tử: ' + i));
//     document.write(array[i]);
// }

let size = parseInt(prompt('Nhập size của mảng: '));
let array = new Array(size);
for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor((Math.random() * (50 -10 + 1) + 10));   
} console.log(array);

// let search = parseInt(prompt('Nhập giá trị cần tìm kiếm: '));
// let pos = -1;
// for (i = 0; i < array.length; i++) { 
//     if (search == array[i]) {
//         pos = i;
//         break;
//     }
// }document.write('Vị trí đầu tiên của số cần tìm là ' + pos);
//     // console.log(array[i]);

// let array_1 = new Array(size);
// for (let i = 0; i < array_1.length; i++) {
//     array_1[i] = array[i] * 2;
// }
// console.log(array_1);

let start = parseInt(prompt('Nhập vị trí bắt đầu: '));
let end = parseInt(prompt('Nhập vị trí kết thúc: '));

let array_2 = new Array();
for (i = start; i < end; i++) {
    array_2[i] = array[i];
} console.log(array_2);
// let tong = 0;
// for (i = 0; i < array.length; i++) {
//     tong += array[i];
// }console.log(tong);
