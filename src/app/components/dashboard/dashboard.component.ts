import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'info', cols: 1, rows: 2},
    {text: 'profile', cols: 3, rows: 1 },
    {text: 'trayectory', cols: 3, rows: 1},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
