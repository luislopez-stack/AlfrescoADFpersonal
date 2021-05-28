import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'aca-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.scss']
})
export class FirstViewComponent implements OnInit {

  private params: any;
  name: string;


  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.params = this.route.params.subscribe( params => {
      this.name = params['name'];
    });

  }

  ngOnDestroy() {
    this.params.unsubscribe();
  }

}
