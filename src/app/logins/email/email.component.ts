import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  email: any;
  password: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.email, this.password);
  }
}
