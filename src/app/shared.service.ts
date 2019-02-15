import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export class SharedService {

  private messageSource = new BehaviorSubject('User');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
