import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../interfaces/restaurante';

@Injectable({
  providedIn: 'root',
})
export class FireBaseService {
  private apiUrl: string =
    'https://admin-resto-app-default-rtdb.firebaseio.com/la_sazon.json';
  constructor(private http: HttpClient) {}

  cargarDatos(): Observable<Restaurante> {
    return this.http.get<Restaurante>(this.apiUrl);
  }
}
