let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carsoleDom = document.querySelector('.carsole');
let listItemDom = document.querySelector('.carsole .list');
let thumbnailDom = document.querySelector('.carsole .thumbnail');

nextDom.onclick = function() {
    showSlider('next');
}
prevDom.onclick = function() {
    showSlider('prev');
}

let timeAutoNext = 7000;
let timeRunning = 1000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carsole .list .item');
    let itemThumbnail = document.querySelectorAll('.carsole .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carsoleDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carsoleDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carsoleDom.classList.remove('next', 'prev'); // Remove both 'next' and 'prev' classes
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
