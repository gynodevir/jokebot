import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-texttovoice',
  templateUrl: './texttovoice.component.html',
  styleUrls: ['./texttovoice.component.css']
})
export class TexttovoiceComponent implements OnInit{
  // textToSpeak: string = '';
  // voices: SpeechSynthesisVoice[] = [];
  // selectedVoice: string = '';

  // constructor() {
  //   this.voices = window.speechSynthesis.getVoices();
  //   window.speechSynthesis.onvoiceschanged = () => {
  //     this.voices = window.speechSynthesis.getVoices();
  //   };
  // }

  // speak() {
  //   const speechSynthesis = window.speechSynthesis;
  //   const utterance = new SpeechSynthesisUtterance(this.textToSpeak);

  //   const selectedVoice = this.voices.find(voice => voice.name === this.selectedVoice);

  //   if (selectedVoice) {
  //     utterance.voice = selectedVoice;
  //     speechSynthesis.speak(utterance); // Move this line inside the if block
  //   }
  // }
  @Input() ques: string = '';
  @Input() ans:string=''
  @Input() clicked:boolean=false
  

  texttoSpeak:string=''
  voices:SpeechSynthesisVoice[]=[]
  selectedVoice:string=''

  ngOnInit(): void {
    this.voices=window.speechSynthesis.getVoices()
    window.speechSynthesis.onvoiceschanged=()=>{
      this.voices=window.speechSynthesis.getVoices()
    }
  }
  speak() {
    this.texttoSpeak=this.ques+this.ans
    console.log(this.texttoSpeak)

    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(this.texttoSpeak);

    const selectedVoice = this.voices.find(voice => voice.name === this.selectedVoice);

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      speechSynthesis.speak(utterance);
    }
  }

}
