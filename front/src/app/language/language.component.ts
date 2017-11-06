
import { Component, OnInit, OnDestroy} from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
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
    translate;
    languageTo;
    languageFrom;
    constructor(private speechRecognitionService: SpeechRecognitionService, private http : Http) {
        this.speechData = "";
    }

    ngOnInit() {
        console.log("areej and hanan")
    }

    ngOnDestroy() {
        this.show = !this.show;
        this.speechRecognitionService.test();
        this.languageTo=$("#languageTo").val();
        this.languageFrom= $("#languageFrom").val();
        let text = $("#txtSpeechSearchMovieName").val();
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/translate', {text : text, languageFrom : this.languageFrom, languageTo : this.languageTo}, {headers: headers})
        .map((res) => {
            if(res){
                this.translate = res.json()
                console.log(this.translate)
                this.textToSpeech()
            }else{

            }
        }).subscribe();    


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

    textToSpeech() {
        let msg = new SpeechSynthesisUtterance(this.translate);
        msg.lang=this.languageTo.toLowerCase();
        window.speechSynthesis.speak(msg);
    }

}


