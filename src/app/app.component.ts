import { Component, ViewChild } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// Esta interfaz contiene los atributos de la tabla que va a mostrarse por pantalla

// TableElement para la API de usuarios (User)
//export interface TableElement {
//  id: string;
//  name: string;
//  email: string;
//  website: string;
//}

// TableElement para la API de posts (Post)
export interface TableElement {
  userId: string;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Se importa el servicio RestApiService para recuperar y mostrar los datos de los usuarios.
// Adicionalmente, se usa Material para mostrar los datos con Material table UI.
// Se controla el número de items con el módulo de paginación de Material

export class AppComponent {
  Data: TableElement[] = null;
  //col: string[] = ['id', 'name', 'email', 'website'];
  col: string[] = ['userId', 'id', 'title', 'body'];

  dataSource = new MatTableDataSource<TableElement>(this.Data);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private restApiService: RestApiService) {
    // Nos suscribimos al servicio para obtener los usuarios
    this.restApiService.getPosts().subscribe((res) => {
      this.dataSource = new MatTableDataSource<TableElement>(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

}
