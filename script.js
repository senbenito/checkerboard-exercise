var body = document.getElementsByTagName('body')[0];

function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i=1; i<64; i++){
    var tile = document.createElement('div');
    tile.style.backgroundColor = `rgb(${getRandomIntInclusive(0,255)}, ${getRandomIntInclusive(0,255)}, ${getRandomIntInclusive(0,255)})`;
    tile.style.width = '11.1%';
    tile.style.float = 'left';
    tile.style.paddingBottom = '11.1%';
    body.appendChild(tile);
}
