import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adz-search',
  templateUrl: './adz-search.component.html',
  styleUrls: ['./adz-search.component.css']
})
export class AdzSearchComponent implements OnInit {

  recherche:String = "";
  
  constructor(public router: Router) { 


  }

  ngOnInit() {
  }

  rechercher(){
    this.router.navigate(['rechercher',this.recherche]);
  }
}
