import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdzSearchComponent } from './adz-search/adz-search.component'
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,MatCardModule,
  MatGridListModule, MatDialogModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AdzListeComponent} from './adz-liste/adz-liste.component';

const routes: Routes = [
  {
    path: 'home',
    component: AdzSearchComponent,
  },{
    path: 'rechercher/:motcle',
    component: AdzListeComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [RouterModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule
    ]
})
export class AppRoutingModule { }
