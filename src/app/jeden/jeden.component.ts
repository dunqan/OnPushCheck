import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-jeden',
  templateUrl: './jeden.component.html',
  styleUrls: ['./jeden.component.css']
})
export class JedenComponent implements OnInit {

  aa = 1;

  constructor() {

    setInterval(() => { this.aa++;  console.log(this.aa); }, 1000);
  }

  ngOnInit() {
  }

  click() {
    this.aa = this.aa + 100;
  }
}
