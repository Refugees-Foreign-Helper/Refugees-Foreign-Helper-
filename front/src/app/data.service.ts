import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {
  public FlagSource = new BehaviorSubject<boolean>(false);
  currentFlag = this.FlagSource.asObservable();
  constructor() { }
  changeFlag(flag: boolean) {
    this.FlagSource.next(flag);
  }
}