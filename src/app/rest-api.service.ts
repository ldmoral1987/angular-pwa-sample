import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Esta interfaz contiene los campos del modelo de datos que gestiona el servicio
export interface User {
  id: string;
  name: string;
  email: string;
  website: string;
}

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  // Esta string contiene la URL del servicio de usuarios a consumir (jsonplaceholder)
  api: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // Se devuelven los usuarios de la API como un observable del tipo User
    return this.http.get<User[]>(this.api)
  }
}
