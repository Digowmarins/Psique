import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './componentes/body/body.component';
import { PortalComponent } from './componentes/portal/portal.component';


const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'portal', component: PortalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
