import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild('f') Form: NgForm;

  ngOnInit() {
  }

  getCode(number: string) {
    console.log(number);
  }

  onSubmit() {
    console.log(this.Form.value);
  }
}