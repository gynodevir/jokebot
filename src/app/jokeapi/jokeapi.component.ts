import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jokeapi',
  templateUrl: './jokeapi.component.html',
  styleUrls: ['./jokeapi.component.css']
})
export class JokeapiComponent implements OnInit {
  // @Output() ques = new EventEmitter<string>();
  // @Output() ans = new EventEmitter<string>();
  // @Output() clicked = new EventEmitter<boolean>();
  @Input() ques:string=''
  @Input() ans:string=''
  @Input() clicked=false

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getRandomJoke();
  }

  getRandomJoke() {
    const apiUrl = 'https://official-joke-api.appspot.com/jokes/programming/random';
    // this.clicked.emit(true);
    this.clicked=true

    this.httpClient.get(apiUrl)
      .subscribe((response: any) => {
        if (response && response.length > 0) {
          // this.ques.emit(response[0].setup);
          // this.ans.emit(response[0].punchline);
          this.ques=response[0].setup
          this.ans=response[0].punchline
          console.log(response);
        }
      });
  }
}
