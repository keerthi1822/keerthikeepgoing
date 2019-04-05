var textrotate = document.getElementsByClassName('rotate');
console.log(document.getElementsByClassName('rotate'));
var deg = 0;
var sign = 1;
//textrotate[0].style.transform='rotate(50deg)';
var animate = setInterval(swing, 50);
function swing() {
    
    /* for(let i = 0; i < textrotate.length; i++){ */
    textrotate[0].style.transform = 'rotate(' + deg + 'deg)';
    //console.log(i);
    if (deg > 5 ) {
        sign = -1;
    }
    else if (deg < -5) {
        sign = 1;
    }
    deg = deg + sign * 0.5;
}//}