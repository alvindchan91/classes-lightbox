class Square {
  constructor(num) {
    this.e = document.createElement('div');
    document.getElementById('content').appendChild(this.e);
    this.e.style.backgroundColor = 'green';
    this.e.className = 'square';
    this.num = num;
    //this.e.id = `box${num}`;
    this.e.innerHTML = `<p>${num}</p>`;
    this.e.onclick = () => {
      this.switch();
      this.findAdjacents().forEach(v => v.switch());
    }
  }
  switch () {
    if (this.e.style.backgroundColor === 'green') {
      this.e.style.backgroundColor = 'yellow';
    } else this.e.style.backgroundColor = 'green';
  }
  findAdjacents() {
    let adjacents = [];
    if(this.num + n < n*n) adjacents.push(squaresArr[this.num+n]);
    if (this.num - n >= 0) adjacents.push(squaresArr[this.num - n]);
    if ((this.num + 1) % n !== 0) adjacents.push(squaresArr[this.num + 1]);
    if ((this.num - 1) % n !== n - 1 && this.num !== 0) adjacents.push(squaresArr[this.num - 1]);
    return adjacents;
  }
}

let drawGrid = () => {
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').style.width = `${n*80}px`;
  squaresArr = [];
  for (i = 0; i < n * n; i++) squaresArr.push(new Square(i));
  squaresArr[Math.floor(Math.random() * n * n)].switch();
}

let n = 5;
  squaresArr = [];

const submit = document.getElementById('submitButton');
submit.onclick = () => {
  n = +document.getElementById('gridNum').value;
  drawGrid();
}

window.onload = drawGrid;
