var body = document.getElementsByTagName('body')[0];

function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

// body.style.position = 'relative';
var overlay = document.createElement('div');
overlay.style.position = 'absolute';
overlay.style.background = 'linear-gradient(to top, rgba(0,0,255,.3), rgba(0,0,255,.6))';
overlay.style.width = '100%';
overlay.style.height = '275%';
// overlay.style.float = 'left';
// overlay.style.paddingTop = '0%';
overlay.style.top = '0px';
overlay.style.bottom = '0px';
body.appendChild(overlay);


for (let i=1; i<64; i++){
    var tile = document.createElement('div');
    // tile.style.backgroundColor = `rgba(${getRandomIntInclusive(0,255)}, ${getRandomIntInclusive(0,255)}, ${getRandomIntInclusive(0,255)}, .5)`;
    tile.style.display = 'inline-block';
    tile.style.width = '11.1%';
    tile.style.float = 'left';
    tile.style.paddingBottom = '11.1%';
    if (i%2===1){
      tile.style.backgroundColor = 'red';
    } else {
      tile.style.backgroundColor = 'black';
    }
    body.appendChild(tile);

}
