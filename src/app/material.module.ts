import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';

// Este módulo gestiona los componentes de Material que son importados en la aplicación
@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule
    ]
})

export class MaterialModule { }
