import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../data/classes/producto.model';
import { ProductoInterface } from '../../data/interface/productoInterface.model';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-lista-prod',
  templateUrl: './lista-prod.component.html',
  standalone: true,
  styleUrls: ['./lista-prod.component.scss'],
  imports: [ IonLabel, CommonModule, IonContent, IonButton],
})
export class ListaProdComponent  implements OnInit {
  producto: Producto;
  productoInterface: Producto;
  activo: boolean = true;
  listaProductos: string[] = ["Manzana", "Pera", "Kiwi", "Banano"];

  listaObjetos = [
    {
      nombre: "Juana",
      edad: 25
    },
    {
      nombre: "Andres",
      edad: 19
    },
    {
      nombre: "Camila",
      edad: 32
    }
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

  cambiarValor(){
    this.activo = !this.activo;
  }

  changePriceInterface(){
    this.productoInterface = {
      sell() {
          console.log("A");
      },
      id: 1,
      name: 'PC2',
      price: 2000
    }
  }
}
