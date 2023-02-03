import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  columnas: string[] = ['id', 'nombre','fechaCreacion','ruc','fechaCampeonato', 'borrar', 'editar'];

  datos: Articulo[] = [new Articulo(1,'barcelona', new Date,2, new Date),
  new Articulo(2, 'Aucas',new Date,33,new Date),
  ];

  articuloselect: Articulo = new Articulo(0,'', new Date,0, new Date);

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
}
editar(articulo: Articulo){
  this.articuloselect = articulo;

}
agregar() {
    this.datos.push(new Articulo(this.articuloselect.id, this.articuloselect.nombre, this.articuloselect.fechaCreacion,this.articuloselect.ruc,this.articuloselect.fechaCampeonato));
    this.tabla1.renderRows();
  this.articuloselect = new Articulo(0, "",new Date,0,new Date);
}
cambiar(){
  if (this.articuloselect.id === 0){
    this.datos.push(new Articulo(this.articuloselect.id, this.articuloselect.nombre, this.articuloselect.fechaCreacion,this.articuloselect.ruc,this.articuloselect.fechaCampeonato));
    this.tabla1.renderRows();
  }
  this.articuloselect = new Articulo(0, "",new Date,0,new Date);
}
}
export class Articulo {
  constructor(public id: number, public nombre: string,public fechaCreacion:Date,public ruc:number, public fechaCampeonato:Date) {
  }
}
