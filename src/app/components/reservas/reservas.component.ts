import { Component, Input, OnInit } from '@angular/core';
import { ReservaDto } from 'src/app/interfaces/reservaDto';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
})
export class ReservasComponent implements OnInit {

  @Input() reservas: ReservaDto[] = [];
  @Input() enReservas = false;

  constructor() { }

  ngOnInit() {}

}
