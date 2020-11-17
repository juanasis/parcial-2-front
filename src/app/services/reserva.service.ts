import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseDto} from '../interfaces/responseDto';
import {ReservaDto} from '../interfaces/reservaDto';

@Injectable({
    providedIn: 'root'
})
export class ReservaService {

    constructor(private httpClient: HttpClient) {
    }

    saveReserva(reserva: ReservaDto) {
        return this.httpClient.post<ResponseDto>(`http://localhost:8080/reservas`, reserva);
    }

    getReservas() {
        return this.httpClient.get<ResponseDto>(`http://localhost:8080/reservas`);
    }

}
