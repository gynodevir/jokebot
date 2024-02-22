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
  @Input() ques:string=''
  @Input() ans:string=''
  @Input() clicked : boolean=false
  
}
