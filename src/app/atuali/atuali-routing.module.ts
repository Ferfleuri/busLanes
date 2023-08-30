import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualiPage } from './atuali.page';

const routes: Routes = [
  {
    path: '',
    component: AtualiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualiPageRoutingModule {}
