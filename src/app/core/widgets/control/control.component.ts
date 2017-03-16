import {Component, OnInit, Input, Host, ContentChild} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Input() label : string;
  @ContentChild(NgModel) control : NgModel;

  constructor(@Host() public form:NgForm, ) { }

  ngOnInit() {
  }

}
