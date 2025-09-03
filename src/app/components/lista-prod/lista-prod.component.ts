import { Component, OnInit } from '@angular/core';
import { Producto } from '../../data/classes/producto.model';
import { Producto } from '../../data/interface/productoInterface.model';

@Component({
  selector: 'app-lista-prod',
  templateUrl: './lista-prod.component.html',
  standalone: true,
  styleUrls: ['./lista-prod.component.scss'],
  imports: [ Producto ],
})
export class ListaProdComponent  implements OnInit {

  activo: boolean = false;
  producto: Producto;
  productoInterface: Producto;
  listaProducto: string[] = ["Manzana", "Pera", "Kiwi", "Banano"];

  listaObjetos = [
    {nombre: "Juana",
      edad: 25
    },
    {nombre: "Andres",
      edad: 25
    },
    {nombre: "Camilo",
      edad: 25
    },
  ]

  constructor() { }

  ngOnInit() {}

  changePrice(){
    let x: number = 0;
    let newProduct = new Producto(2, 'Helmet', 4000);
    newProduct  
    this.producto = new Producto(1, 'PC', 1000);
    this.activo = !this.activo;
  }

  changePriceInterface(){´
    this.productoInterface = {
      id: 1,
      name: 'PC2'
      (property) ListaProdComponent.activo: boolean = true,
      price: 2000
    }
  }
}
