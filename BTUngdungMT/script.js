function addition() {
    let fnb = Number(document.getElementById('firstnb').value);
    let scb = Number(document.getElementById('secondnb').value);
    let add = fnb + scb;
    // let sub = fnb - scb;
    // let mul = fnb * scb;
    // let div = fnb / scb;
    document.getElementById('result').value = add;
    // document.getElementById('result').value = sub;
    // document.getElementById('result').value = mul;
    // document.getElementById('result').value = div;
}
function subtraction() {
    let fnb = Number(document.getElementById('firstnb').value);
    let scb = Number(document.getElementById('secondnb').value);
    let sub = fnb - scb;
    document.getElementById('result').value = sub;
}
function multiplication() {
    let fnb = Number(document.getElementById('firstnb').value);
    let scb = Number(document.getElementById('secondnb').value);
    let mul = fnb * scb;
    document.getElementById('result').value = mul;
}
function division() {
    let fnb = Number(document.getElementById('firstnb').value);
    let scb = Number(document.getElementById('secondnb').value);
    let div = fnb / scb;
    document.getElementById('result').value = div;
}