import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RestaurantesComponent} from './restaurantes/restaurantes.component';
import {RestauranteComponent} from './restaurante/restaurante.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ReservasComponent } from './reservas/reservas.component';


@NgModule({
    declarations: [
        RestaurantesComponent,
        RestauranteComponent,
        ReservaComponent,
        ReservasComponent
    ],
  imports: [
    CommonModule,
    IonicModule
  ],
    exports: [
        RestaurantesComponent,
        RestauranteComponent,
        ReservaComponent,
        ReservasComponent
    ]
})
export class ComponentsModule {
}
