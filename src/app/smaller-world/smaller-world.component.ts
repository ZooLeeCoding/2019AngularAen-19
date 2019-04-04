import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-smaller-world',
  templateUrl: './smaller-world.component.html',
  styleUrls: ['./smaller-world.component.css']
})
export class SmallerWorldComponent implements OnInit {

  name = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name');
    })
  }

}
