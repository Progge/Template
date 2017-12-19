import { Component, OnInit } from '@angular/core';
import { AboutUsService } from './about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  proggeAbWorkers: any;

  constructor(private aboutUsService: AboutUsService) {}

  ngOnInit() {
    this.proggeAbWorkers = this.aboutUsService.getWorkers();
  }

}
