import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ReservaDto } from 'src/app/interfaces/reservaDto';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent implements OnInit {
  @Input() reserva: ReservaDto;
  @Input() enReserva;
  constructor(private actionSheetController: ActionSheetController,
       private reservaService: ReservaService
    ) { }

  ngOnInit() {}

}
