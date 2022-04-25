
// prompt('Nhập tên ngôi sao cần tìm: ');

function nameStar(name) {
    let star_1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let star_2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
    name = document.getElementById('star').value;
    console.log(name);
    for (let i = 0; i < star_1.length; i++) {
        if (name == star_1[i]) {
            document.getElementById('result').innerHTML = star_2[i];
        }
        else {
            document.getElementById('result').innerHTML = "Không tìm thấy";
        }
    }
}
