import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ReservaDto} from '../../interfaces/reservaDto';
import {ReservaService} from '../../services/reserva.service';

@Component({
    selector: 'app-modal-info',
    templateUrl: './modal-info.page.html',
    styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

    @Input() id;
    @Input() nombre;
    reserva: ReservaDto = {id: 0, email: '', fecha: '', hora: '', restauranteId: '0', restauranteNombre: ''};
    fechaReserva: Date = new Date();
    horaReserva: Date = new Date();

    constructor(private modalController: ModalController,
                private reservaService: ReservaService) {
    }

    ngOnInit() {
        this.reserva.restauranteId = this.id;
        this.reserva.fecha = this.getDateFormat(this.fechaReserva);
        this.reserva.hora = this.getHoraFormat(this.horaReserva);
    }

    salirSinParametros() {
        this.modalController.dismiss();
    }

    onSubmitTemplate() {
        this.reservaService.saveReserva(this.reserva).subscribe(resp => {
            this.modalController.dismiss();
        });
    }

    getDateFormat(fecha: any) {
        const year = new Date(fecha).getFullYear().toString();
        const mes = ('0' + (new Date(fecha).getMonth() + 1)).slice(-2);
        const dia = ('0' + (new Date(fecha).getDate())).slice(-2);
        const fechaFormat = year + '-' + mes + '-' + dia;
        return fechaFormat;
    }

    getHoraFormat(hora: any) {
        const dateFrom  = new Date(hora);
        const hor = dateFrom.getHours().toString();
        const min = dateFrom.getMinutes();
        const seg = '00';
        const horaFormat = hor + ':' + min + ':' + seg;
        return horaFormat;
    }

    cambioFecha(event) {
        this.reserva.fecha = this.getDateFormat(event.detail.value);
    }

    cambioHora(event) {
        this.reserva.hora = this.getHoraFormat(event.detail.value);
    }
}
