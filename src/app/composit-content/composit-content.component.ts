import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-composit-content',
  templateUrl: './composit-content.component.html',
  styleUrls: ['./composit-content.component.css']
})
export class CompositContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeMe() {
    this.router.navigate([{outlets: {compose: null}}]);
  }

}
