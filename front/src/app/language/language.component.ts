import { Component, OnInit, OnDestroy} from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit, OnDestroy {
	showSearchButton: boolean;
    speechData: string;
    language;
    show=false;
    constructor(private speechRecognitionService: SpeechRecognitionService) {
        this.speechData = "";
    }

    ngOnInit() {
        console.log("areej and hanan")
    }

    ngOnDestroy() {
         this.show = !this.show;
        this.speechRecognitionService.stop();
    }

    activateSpeechSearchMovie(): void {
        this.show = !this.show;        
        this.speechRecognitionService.record()
            .subscribe(
            //listener
            (value) => {
                this.speechData = value;
                console.log(value);
            },
            //errror
            (err) => {
                console.log(err);
                if (err.error == "there is no speech untile now") {
                    this.activateSpeechSearchMovie();
                }
            },
            //completion
            () => {
                this.activateSpeechSearchMovie();
            });
    }

}
