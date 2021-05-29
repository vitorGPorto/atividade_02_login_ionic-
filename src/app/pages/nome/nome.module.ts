import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomePageRoutingModule } from './nome-routing.module';

import { NomePage } from './nome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NomePageRoutingModule
  ],
  declarations: [NomePage]
})
export class NomePageModule {}
