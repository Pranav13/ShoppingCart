import { SharedService } from './../shared.service';
import { FormService } from './../form.service';
import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent, getSingleValueObservable } from '../login/login.component';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user: string;

  constructor(private shared: SharedService) { }


  ngOnInit() {
    this.shared.currentMessage.subscribe(message => this.user = message);
  }




}
