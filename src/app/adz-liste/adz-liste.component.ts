import { Component, OnInit, Input, Inject } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { ResearchService} from '../services/research.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdzDetailsComponent} from "../adz-details/adz-details.component";


@Component({
  selector: 'app-adz-liste',
  templateUrl: './adz-liste.component.html',
  styleUrls: ['./adz-liste.component.css']
})
export class AdzListeComponent implements OnInit {

  motcle:String;
  data:any;
  
  constructor(public router: ActivatedRoute,private researchService: ResearchService,public route:Router,public dialog: MatDialog) {
   }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.motcle = params['motcle'];
      });
      console.log(this.motcle);
      this.researchService.doReserch(this.motcle).subscribe( ( data:any[] ) => {
        this.data = data;
        console.log(this.data);
     });
  }

  
  getinfo(a){
    let dialogRef = this.dialog.open(AdzDetailsComponent, {
      height: '400px',
      width: '600px',
      data: { data:a}
    });
   
    console.log(a)
  }
}
