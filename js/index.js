const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const countLabel = document.getElementById('countLabel');
let myImage = document.getElementById('slider-img');
let images = ['1.jpg', '2.gif', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
let count = 0;
let i = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
    if(i <= 0 )i = images.length;
    i--;
    return setImg();
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}
resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}

function setImg(){
    return myImage.setAttribute('src', 'images/'+images[i]);
}