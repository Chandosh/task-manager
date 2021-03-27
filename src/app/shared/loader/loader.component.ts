import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }
  value = 50;
  ngOnInit(): void {
  }

}
