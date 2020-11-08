import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-convas',
  templateUrl: './convas.component.html',
  styleUrls: ['./convas.component.scss']
})
export class ConvasComponent implements OnInit {
  canvas: any;
  ctx: any;
  isDrawing: any;
  lastPoint: any;

  constructor() {
  }

  ngOnInit() {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.height = 500;
    this.canvas.width = 500;
    let image2 = new Image();
    image2.src ='../../assets/img/shashankmital.png'
    this.ctx.drawImage(image2,10, 10);

    this.ctx.lineJoin = this.ctx.lineCap = 'round';

  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  drawPixels(x, y) {
    for (let i = -10; i < 10; i += 4) {
      for (let j = -10; j < 10; j += 4) {
        if (Math.random() > 0.5) {
          this.ctx.fillStyle = ['red', 'orange', 'yellow', 'green',
            'light-blue', 'blue', 'purple'][this.getRandomInt(0, 6)];
          this.ctx.fillRect(x + i, y + j, 4, 4);
        }
      }
    }
  }

  onmousedown(e) {
    this.isDrawing = true;
    this.lastPoint = {x: e.clientX, y: e.clientY};
  };

  onmousemove(e) {
    if (!this.isDrawing) return;

    this.drawPixels(e.clientX, e.clientY);

    this.lastPoint = {x: e.clientX, y: e.clientY};
  };

  onmouseup() {
    this.isDrawing = false;
  };

}
