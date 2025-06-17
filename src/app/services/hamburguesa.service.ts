import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hamburguesa } from '../../../public/dto/hamburguesa';

@Injectable({
  providedIn: 'root'
})
export class HamburguesaService {

constructor(private http: HttpClient) { }


  getHamburguesas(): Observable<Hamburguesa[]> {
    return this.http.get<Hamburguesa[]>('https://62b8c72a03c36cb9b7cbb449.mockapi.io/hamburguesa');
  }

  agregarHamburguesa(hamburguesa: Hamburguesa): Observable<Hamburguesa> {
    console.log('Agregando hamburguesa:', hamburguesa);
    return this.http.post<Hamburguesa>('https://62b8c72a03c36cb9b7cbb449.mockapi.io/hamburguesa', hamburguesa);
  }
}
