import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as _ from "lodash";
declare var jquery:any;
declare var $ :any;

// to run SpeechRecognition in 'TypeScript' we created interface
interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

@Injectable()
export class SpeechRecognitionService {
	speechRecognition: any;
	constructor(private zone: NgZone){

	}
	    record(): Observable<string> {

        return Observable.create(observer => {
           let language=$("#language").val();
            //Speech recognition interfaces are currently prefixed on Chrome, so we'll need to prefix interface names appropriately so we used "webkitSpeechRecognition"
            const { webkitSpeechRecognition }: IWindow = <IWindow>window;
            this.speechRecognition = new webkitSpeechRecognition();
            // seting the attibutes 
            this.speechRecognition.lang = language;
            this.speechRecognition.continuous = true;
            this.speechRecognition.maxAlternatives = 20;
            this.speechRecognition.onresult = speech => {
                // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
                // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
                // It has a getter so it can be accessed like an array
                // The first [0] returns the SpeechRecognitionResult at position 0.
                // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
                // These also have getters so they can be accessed like arrays.
                // The second [0] returns the SpeechRecognitionAlternative at position 0.
                // We then return the transcript property of the SpeechRecognitionAlternative object
                let word: string = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    // SpeechRecognitionResult {0: SpeechRecognitionAlternative, 1: SpeechRecognitionAlternative,... up to 19  isFinal: true}
                    // 0:SpeechRecognitionAlternative {transcript: "Isabella", confidence: 0}

                    console.log("result" , speech.results, speech.resultIndex);
                    var nearWord = result[0].transcript; //the original word alternative
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log("sorry!! this result kind of bad data");
                        }
                        else {
                            //we used trim here to Removes whitespace from the beginning and end of the 'nearword'.
                            word = _.trim(nearWord);
                            console.log("Did you mean? -> " + word + " , If not try say something else...");
                        }
                    }
                }
                this.zone.run(() => {
                    observer.next(word);
                });
            };

            this.speechRecognition.start();
            console.log("Say something - I am giving up on you");


            // this.speechRecognition.onend = () => {
            //     observer.complete();
            // };

            this.speechRecognition.onerror = error => {
                observer.error(error);
            };

        });
    }  

    stop(){
        this.speechRecognition.stop();
    }
}