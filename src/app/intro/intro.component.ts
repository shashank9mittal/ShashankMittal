import {Component, OnInit, AfterContentInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, AfterContentInit {
  content = [
    "make internet look beautiful",
    "Front-End Developer",
    "an aspiring Designer",
  ];
  part = 0;
  partIndex = 0;
  intervalVal: any;
  element: any;
  cursor: any;

  constructor(public router: Router) {
  }

  ngOnInit() {

  }

  ngAfterContentInit(): void {
    this.element = document.querySelector("#text");
    this.cursor = document.querySelector("#cursor");
    // this.typing();
    // this.initialize();
    this.intervalVal = setInterval(() => {
      this.typing();
    }, 100);
  }


// Implements typing effect
  typing() {
    // Get substring with 1 characater added
    let text = this.content[this.part].substring(0, this.partIndex + 1);
    this.element.innerHTML = text;
    this.partIndex++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === this.content[this.part]) {
      // Hide the cursor
      this.cursor.style.display = 'none';

      clearInterval(this.intervalVal);
      setTimeout(() => {
        this.intervalVal = setInterval(() => {
          this.delete();
        }, 50);
      }, 1000);
    }
  }

// Implements deleting effect
  delete() {
    // Get substring with 1 characater deleted
    let text = this.content[this.part].substring(0, this.partIndex - 1);
    this.element.innerHTML = text;
    this.partIndex--;

    // If sentence has been deleted then start to display the next sentence
    if (text === '') {
      clearInterval(this.intervalVal);

      // If current sentence was last then display the first one, else move to the next
      if (this.part == (this.content.length - 1))
        this.part = 0;
      else
        this.part++;

      this.partIndex = 0;

      // Start to display the next sentence after some time
      setTimeout(() => {
        this.cursor.style.display = 'inline-block';
        this.intervalVal = setInterval(() => {
          this.typing();
        }, 100);
      }, 200);
    }
  }
}
