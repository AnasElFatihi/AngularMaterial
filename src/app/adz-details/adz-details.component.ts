import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-adz-details',
  templateUrl: './adz-details.component.html',
  styleUrls: ['./adz-details.component.css']
})
export class AdzDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdzDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
