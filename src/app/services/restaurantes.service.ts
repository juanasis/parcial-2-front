import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseDto} from '../interfaces/responseDto';

@Injectable({
    providedIn: 'root'
})
export class RestaurantesService {

    constructor(private httpClient: HttpClient) {
    }

    getRestaurantes() {
        // return this.httpClient.get<ResponseDto>(`http://localhost:8080/restaurantes`);
        // return this.httpClient.get<ResponseDto>(`https://restaurantes.ekeepoit.com/restaurantes`);
        return this.httpClient.get<ResponseDto>(`/assets/mocks/restaurantes.json`);
    }

    getCategorias() {
        return this.httpClient.get<ResponseDto>(`/assets/mocks/categorias.json`);
    }
}
