import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jokeapi',
  templateUrl: './jokeapi.component.html',
  styleUrls: ['./jokeapi.component.css']
})
export class JokeapiComponent implements OnInit {
  @Output() ques = new EventEmitter<string>();
  @Output() ans = new EventEmitter<string>();
  @Output() clicked = new EventEmitter<boolean>();
  ques1:string=''
  ans1:string=''
  clicked1:boolean=false


  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getRandomJoke();
  }

  getRandomJoke() {
    const apiUrl = 'https://official-joke-api.appspot.com/jokes/programming/random';
    this.clicked.emit(true);

    this.httpClient.get(apiUrl)
      .subscribe((response: any) => {
        if (response && response.length > 0) {
          const setup = response[0].setup;
          const punchline = response[0].punchline;

          // Emit events if needed
          this.ques.emit(setup);
          this.ans.emit(punchline);
          this.ques1=setup
          this.ans1=punchline
          this.clicked1=true
          

          // Log values to the console
          console.log('Setup:', setup);
          console.log('Punchline:', punchline);
        }
      });
  }
}
