import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  template: `
    <p>
      countdown works!
    </p>
  `,
  styles: [
  ]
})
export class CountdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
