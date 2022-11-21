var firstButton = document.getElementById('b1')
var secondButton = document.getElementById('b2')
var thirdButton = document.getElementById('b3')

var carHorn = document.getElementById("carHorn");
var carStart = document.getElementById("carStart");
var carCrash = document.getElementById("carCrash");

firstButton.addEventListener('click', function () {
    carStart.play();
})
secondButton.addEventListener('click', function () {
    carHorn.play();
})
thirdButton.addEventListener('click', function () {
    carCrash.play();
})

firstButton.addEventListener('mouseenter', function () {
    carStart.play();
})
secondButton.addEventListener('mouseenter', function () {
    carHorn.play();
})
thirdButton.addEventListener('mouseenter', function () {
    carCrash.play();
})