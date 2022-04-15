// var images = {
//     imgsDS:
//     ["dawn1.jpg",
//     "dawn2.jpg",
//     "dawn3.jpg",
//     "dawn4.jpg"],
//     ["Lake1.jpg",
//     "Lake2.jpg",
//     "Lake3.jpg",
//     "Lake4.jpg"],
//     ["Mountain1.jpg",
//     "Mountain2.jpg",
//     "Mountain3.jpg",
//     "Mountain4.jpg"],
//     ["Sea1.jpg",
//     "Sea2.jpg",
//     "Sea3.jpg",
//     "Sea4.jpg"],
//     imgpos: [0,0,0,0]
// }
// function placeImage (imgpos1, imgToggle) {
//     images.imgpos[imgpos1 - 1] = imgToggle;
//     var imageName = "#img" + imgpos1.toString();
//     $(imageName).attr("src", "./img/" + Image.imgsDS[imgToggle][imgpos1 - 1]);
// }
// function setImagesRamdom() {
//     for (var i=1; i <= 4; i++)
//     {
//         var num1 = Math.floor ((Math.random() * 3));
//         placeImage(1, num1);
//     }
// }
// function imageClick(imgpos1) {
//     var imgToggle = Image.imgpos[imgpos1 - 1];
//     if (imgToggle === 0) {
//         placeImage(imgpos1, 1);
//     }
//     else if (imgToggle === 1) {
//         placeImage(imgpos1, 2);
//     }
//     else if (imgToggle === 2) {
//         placeImage(imgpos1, 0);
//     }
// }
// function checkSet() {
//     var setImg = Images.imgpos[0];
//     var setFlag = true;
//     for (var i=1; i < 4; i++)
//     {
//         if (Image.imgpos[i] !== Image.imgpos[i - 1]) {
//             setFlag = false;
//         }
//     }
//     if (setFlag) {
//         $('img').css("box-shadow", "4px 4px 9px red")
//     }
//     else {
//         $('img').css("box-shadow", "2px 3px 3px black")
//     }
// }
// var main = function () {
//     setImagesRamdom();
//     $("#img1").click(function(){
//         imageClick(1);
//         checkSet();
//     })
//     $("#img2").click(function(){
//         imageClick(2);
//         checkSet();
//     })
//     $("#img3").click(function(){
//         imageClick(3);
//         checkSet();
//     })
//     $("#img4").click(function(){
//         imageClick(4);
//         checkSet();
//     })
// }
// $(document).ready(main());
