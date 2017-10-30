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
    constructor(private speechRecognitionService: SpeechRecognitionService, private http : Http) {
        this.speechData = "";
    }

    ngOnInit() {
        console.log("areej and hanan")
    }

    ngOnDestroy() {
        this.show = !this.show;
        this.speechRecognitionService.stop();
        let languageTo=$("#languageTo").val();
        let languageFrom= $("#languageFrom").val();
        let text = $("#txtSpeechSearchMovieName").val();
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/translate', {text : text, languageFrom : languageFrom, languageTo : languageTo}, {headers: headers})
        .map((res) => {
            if(res){

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

}
