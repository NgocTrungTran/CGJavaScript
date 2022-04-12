function convert() {
    let tienchuyen = Number(document.getElementById('sotien').value);
    let chuyendoi = 22889/tienchuyen;
    document.getElementById('result').value = chuyendoi;
}