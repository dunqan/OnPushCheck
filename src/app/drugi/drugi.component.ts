import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-drugi',
  templateUrl: './drugi.component.html',
  styleUrls: ['./drugi.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DrugiComponent implements OnInit {

  bb = 100;

  constructor() {

    setInterval(() => { this.bb++; console.log(this.bb); }, 1000);

  }

  ngOnInit() {
  }

}