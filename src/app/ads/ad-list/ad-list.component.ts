import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {
  list= [
    'Ethen Sexton',
    'Nora Terry',
    'Anne Villega',
    'Veronica Bower',
    'Todd Gran',
    'Skylar Huffma',
    'Elise Farrel',
    'Hugh Howar',
    'Avah Davi',
    'Paula Hatfiel',
    'Caroline Gregor',
    'Haylee Odonnel'
  ];

  constructor() { }

  ngOnInit() {
  }


}
