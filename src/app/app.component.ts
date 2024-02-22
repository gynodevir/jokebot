import { Component,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jokeapp';
  // @Input() ques: string | undefined;
  // @Input() ans: string | undefined;
  // @Input() clicked: boolean | undefined;
  parentQuestion: string = '';
  parentAnswer: string = '';
  parentClicked: boolean = false;

  handleQuestion(event: string) {
    this.parentQuestion = event;
  }

  handleAnswer(event: string) {
    this.parentAnswer = event;
  }

  handleClick(event: boolean) {
    this.parentClicked = event;
  }
  
}
