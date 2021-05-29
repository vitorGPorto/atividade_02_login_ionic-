import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NomePage } from './nome.page';

const routes: Routes = [
  {
    path: '',
    component: NomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomePageRoutingModule {}
