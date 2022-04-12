//Bài 1
function additional() {
    // debugger;
let diemLy = Number(document.getElementById('dl').value);
let diemHoa = Number(document.getElementById('dh').value);
let diemSinh = Number(document.getElementById('ds').value);
let diemTB = (diemLy + diemHoa + diemSinh)/3;
let diemTong = diemLy + diemHoa + diemSinh;
document.getElementById('ketqua1').value = diemTB;
document.getElementById('ketqua2').value = diemTong;
}
//Bài 2
function ketqua() {
let doC = Number(document.getElementById('nd').value);
let pheptinh = (doC/5)*9 + 32;
document.getElementById('kq').value = pheptinh;
}
// Bài 3
function dthinhtron() {
    let bankinh = Number(document.getElementById('bk').value);
    let duongkinh = Number(document.getElementById('dk').value);
    let dientich1 = 3.14159 * Math.pow(bankinh,2);
    let dientich2 = 3.14159 * Math.pow(duongkinh/2,2);
    document.getElementById('dtbk').value = dientich1;
    document.getElementById('dtdk').value = dientich2;
}
//Bài 4
function cvhinhtron() {
    let bankinh = Number(document.getElementById('bk1').value);
    let duongkinh = Number(document.getElementById('dk1').value);
    let chuvi1 = 3.14159 * 2 * bankinh;
    let chuvi2 = 3.14159 * duongkinh;
    document.getElementById('cvbk').value = chuvi1;
    document.getElementById('cvdk').value = chuvi2;
}