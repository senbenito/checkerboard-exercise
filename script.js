var body = document.getElementsByTagName('body')[0];

for (let i=1; i<63; i++){
  if (i%2===0){
    var redTile = document.createElement('div');
    redTile.style.backgroundColor = 'red';
    redTile.style.width = '11.1%';
    redTile.style.float = 'left';
    redTile.style.paddingBottom = '11.1%'
    body.appendChild(redTile);
  } else {
    var blackTile = document.createElement('div');
    blackTile.style.backgroundColor = 'black';
    blackTile.style.width = '11.1%';
    blackTile.style.float = 'left';
    blackTile.style.paddingBottom = '11.1%'
    body.appendChild(blackTile);
  }
}
