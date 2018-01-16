import { Component, OnInit } from '@angular/core';
import { AboutUsService } from './shared/about-us.service';
import {Employee} from './shared/employee.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  employees: Employee[];

  constructor(private aboutUsService: AboutUsService) {}

  ngOnInit() {
    this.employees = this.aboutUsService.getEmployees();
  }

}
