import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-texttovoice',
  templateUrl: './texttovoice.component.html',
  styleUrls: ['./texttovoice.component.css']
})
export class TexttovoiceComponent implements OnInit {
  @Input() ques: string = '';
  @Input() ans: string = '';
  @Input() clicked: boolean = false;

  texttoSpeak: string = '';
  voices: SpeechSynthesisVoice[] = [];
  selectedVoice: string = '';

  ngOnInit(): void {
    this.voices = window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      this.voices = window.speechSynthesis.getVoices();
    };
  }

  speak() {
    this.clicked = false;
    this.texttoSpeak = this.ques + this.ans;
    console.log(this.texttoSpeak);

    const speechSynthesis = window.speechSynthesis;
    
    // Check if speech synthesis is currently speaking
    if (speechSynthesis.speaking) {
      // Stop the current speech
      speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(this.texttoSpeak);
    const selectedVoice = this.voices.find(voice => voice.name === this.selectedVoice);

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      speechSynthesis.speak(utterance);

      // Listen for the 'end' event to stop continuous generation
      utterance.onend = () => {
        speechSynthesis.cancel();
      };
    }
  }
}
