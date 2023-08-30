import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualiPageRoutingModule } from './atuali-routing.module';

import { AtualiPage } from './atuali.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualiPageRoutingModule
  ],
  declarations: [AtualiPage]
})
export class AtualiPageModule {}
