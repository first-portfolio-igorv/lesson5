import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  public wordsLine!: string;
  public text!: string;
  public words = "words";
  public placeholder1 = "word here...";
  public placeholder2 = "text here...";
  public wordsList = "bad";
  add() {
    if (!this.wordsLine) {
      this.placeholder1 = "Please write a word!"
    }
    else {
      if (this.wordsList == "") {
        this.wordsList += this.wordsLine;
        this.placeholder1 = "word here...";
      }
      else {
        this.wordsList += ", " + this.wordsLine;
        this.placeholder1 = "word here...";
      }
      this.wordsLine = ""
    }
  }
  reset() {
    this.wordsList = "";
  }
  censor() {
    if (!this.text) {
      this.placeholder2 = "Please write a text!"
    }
    else if (!this.wordsList) {
      this.wordsList;
    }
    else {
      let badWords = this.wordsList.split(", ");
      let textarea = this.text.split(" ");
      for (let i = 0; i < badWords.length; i++) {
        for (let j = 0; j < textarea.length; j++) {
          if (badWords[i] == textarea[j]) {
            let num = textarea[j].length;
            textarea[j] = "";
            for (let t = 0; t < num; t++) {
              textarea[j] += "*";
            }
          }
        }
        this.text = textarea.join(" ");
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
