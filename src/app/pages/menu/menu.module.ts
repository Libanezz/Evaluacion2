import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { MenuContactoComponent } from 'src/app/componentes/menu-contacto/menu-contacto.component';
import { MenuSoporteComponent } from 'src/app/componentes/menu-soporte/menu-soporte.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage, MenuContactoComponent, MenuSoporteComponent]
})
export class MenuPageModule {}
