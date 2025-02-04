import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { StandaloneComponent } from './standalone/standalone.component';

const routes: Routes = [
  { path: '', component: AddComponent},
{path : 'standalone', component: StandaloneComponent}
    // Default route for /dashboard
];


@NgModule({
  declarations: [AddComponent, StandaloneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddModule { }
