import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable()
export class FormService {

  val;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
      this.change.emit(this.val);
  }

}
